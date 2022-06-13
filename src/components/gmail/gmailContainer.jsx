import React, { useEffect, useState, useCallback } from 'react';
import Gmail from './gmail';
import { mailCounterState } from '../../state/atoms';
import { useSetRecoilState } from 'recoil';
import Actions from './Actions';

const GmailContainer = () => {
  const apikey = 'AIzaSyCSCdHEmAVr3PMx-kYcZE2_HUSj57Fsd8o';
  const CLIENT_ID =
    '384695187191-8iovoj9g942t135od655qusoodmbgkv6.apps.googleusercontent.com';

  const SCOPES =
    'https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly';

  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [clientLoaded, setClientLoaded] = useState(false);
  const [userID, setUserID] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [messagesIds, setMessagesIds] = useState([]);
  const [emails, setEmails] = useState([]);
  const setUnreadMailCount = useSetRecoilState(mailCounterState);
  // States end

  const handleAuth = () => {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: SCOPES })
      .then(
        () => setSignedIn(true),
        (err) => {
          setSignedIn(false);
          setLoading(false);
          console.log(err);
        }
      );
  };

  const loadClient = () => {
    gapi.client.setApiKey(apikey);
    return gapi.client
      .load('https://content.googleapis.com/discovery/v1/apis/gmail/v1/rest')
      .then(
        () => setClientLoaded(true),
        () => {
          setClientLoaded(false);
          setLoading(false);
        }
      );
  };

  const listMessages = useCallback(() => {
    setLoading(true);
    return gapi.client.gmail.users.messages
      .list({ userId: userID, maxResults: 15, q: 'category: primary' })
      .then(
        (res) => {
          const messages = res.result.messages;
          let messagesIds = [];
          messages.forEach((msg) => messagesIds.push(msg.id));
          setMessagesIds(messagesIds);
        },
        (err) => {
          console.log('Error getting messages ' + err);
          setLoading(false);
          setMessagesIds([]);
        }
      );
  }, [userID]);

  const listEmails = () => {
    setEmails([]);
    messagesIds.forEach((id) => getSingleEmail(id));
    setLoading(false);
  };

  const getSingleEmail = (messageId) => {
    var request = gapi.client.gmail.users.messages.get({
      userId: userID,
      id: messageId,
      format: 'metadata',
      metadataHeaders: ['Subject', 'From', 'Date'],
    });
    return request.execute((res) => {
      const email = {
        id: res.id,
        threadId: res.threadId,
        subject: res.payload.headers.filter(
          (item) => item.name === 'Subject'
        )[0].value,
        from: res.payload.headers.filter((item) => item.name === 'From')[0]
          .value,
        date: res.payload.headers.filter((item) => item.name === 'Date')[0]
          .value,
        internalDate: res.internalDate,
        snippet: res.snippet,
        unRead: res.labelIds.includes('UNREAD'),
      };
      setEmails((prevState) => [...prevState, email]);
    });
  };

  const handleLogout = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      auth2.disconnect();
      setSignedIn(false);
    });
  };

  const markAsRead = (emailId) => {
    const newEmails = emails.map((email) =>
      email.id === emailId ? { ...email, unRead: false } : email
    );
    setEmails(newEmails);
  };
  useEffect(() => {
    setLoading(true);
    gapi.load('client:auth2', function () {
      gapi.auth2.init({ client_id: CLIENT_ID }).then((googleAuth) => {
        loadClient();
        if (gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()) {
          setUserID(
            gapi.auth2
              .getAuthInstance()
              .currentUser.get()
              .getBasicProfile()
              .getId()
          );
          setUserEmail(
            gapi.auth2
              .getAuthInstance()
              .currentUser.get()
              .getBasicProfile()
              .getEmail()
          );
        }
        if (googleAuth.isSignedIn.get()) {
          setSignedIn(true);
        }
      });
    });
    setLoading(false);
  }, [CLIENT_ID, signedIn]);

  useEffect(() => {
    if (clientLoaded && userID) {
      listMessages();
    }
  }, [clientLoaded, userID, listMessages]);

  useEffect(listEmails, [messagesIds]);

  useEffect(() => {
    const count = emails.filter((email) => email.unRead).length;
    setUnreadMailCount(count);
  }, [emails, setUnreadMailCount]);

  return (
    <Gmail
      emails={emails.sort(
        (a, b) => parseInt(b.internalDate) - parseInt(a.internalDate)
      )}
      handleLogout={handleLogout}
      markAsRead={markAsRead}
      reloadEmails={listMessages}
      userEmail={userEmail}
      loading={loading}
      signedIn={signedIn}
      handleAuth={handleAuth}
    >
      <Actions
        link={`https://mail.google.com/mail/u/?authuser=${userEmail}`}
        reload={listMessages}
        logOut={handleLogout}
      />
    </Gmail>
  );
};

export default GmailContainer;
