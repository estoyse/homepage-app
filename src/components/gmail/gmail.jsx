import React from 'react';
import { GmailStyles } from '../../styles/gmailStyles';
import { getDayAndMonth } from '../../helpers/date';
import { extractEmailInfo, removeEmojisFromString } from '../../helpers/gmail';
import Loading from '../loading';

const Gmail = ({
  emails,
  userEmail,
  markAsRead,
  children,
  loading,
  signedIn,
  handleAuth,
}) => {
  return (
    <GmailStyles>
      {!signedIn ? (
        <div className="login">
          <button onClick={handleAuth}>Login to Gmail</button>
        </div>
      ) : (
        <>
          <p className="gmail-title">Latest Mails</p>
          <div className="mails-container">
            {loading ? (
              <Loading />
            ) : (
              <ul className="mails">
                {emails.map((email) => (
                  <li key={email.id} className="single-mail">
                    <div className={email.unRead ? 'dot unread' : 'dot'}></div>
                    <a
                      href={`https://mail.google.com/mail/u/?authuser=${userEmail}#all/${email.threadId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => markAsRead(email.id)}
                    >
                      <div className="mail-header">
                        <p className="username">
                          <span>
                            {extractEmailInfo(email.from).name || '-'}
                            &nbsp;&nbsp;
                            <span className="user-email">
                              {extractEmailInfo(email.from).email || '-'}
                            </span>
                          </span>
                          <span className="header-time">
                            {getDayAndMonth(email.date)}
                          </span>
                        </p>
                      </div>
                      <div className="mail-body">
                        <p className="mail-line">
                          <span className="subject">
                            {removeEmojisFromString(email.subject)}.&nbsp;
                          </span>
                          {email.snippet.substring(0, 120)}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {children}
        </>
      )}
    </GmailStyles>
  );
};

export default Gmail;
