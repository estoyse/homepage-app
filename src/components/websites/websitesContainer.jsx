import React, { useEffect, useState } from 'react';
import { WebsitesStyles } from '../../styles/websitesStyles';
import Websites from './websites';
import { v4 as uuidv4 } from 'uuid';
import AddWebsite from './addWebsite';
import WebsitesModal from './websitesModal';

const WebsitesContainer = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('websites')) {
      setWebsites(JSON.parse(localStorage.getItem('websites')));
    }
  }, []);

  useEffect(() => {
    if (websites.length > 0)
      localStorage.setItem('websites', JSON.stringify(websites));
  }, [websites]);

  const addWebsite = (url, name) => {
    const finalUrl = url.replace(/(^\w+:|^)\/\//, '');
    let iconUrl = finalUrl;
    if (finalUrl.includes('reddit.com')) {
      iconUrl = 'reddit.com';
    }
    const newWebsite = {
      id: uuidv4(),
      url: `http://${finalUrl}`,
      name,
      icon: `https://api.faviconkit.com/${iconUrl}/144`,
    };
    setWebsites([...websites, newWebsite]);
  };

  const deleteWebsite = (e, id) => {
    const newWebsites = websites.filter((website) => website.id !== id);
    setWebsites(newWebsites);
  };

  return (
    <WebsitesStyles>
      <div className="websites">
        <Websites websites={websites} deleteWebsite={deleteWebsite} />
      </div>
      <AddWebsite websites={websites} />
      <WebsitesModal addWebsite={addWebsite} />
    </WebsitesStyles>
  );
};

export default WebsitesContainer;
