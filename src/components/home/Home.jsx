import React from 'react';
import { HomeStyles } from '../../styles/HomeStyles';
import Date from './Date';
import Welcome from './Welcome';
import Weather from './Weather';
import GmailContainer from '../gmail/gmailContainer';
import GoogleContainer from '../search-section/googleContainer';
import WebsitesContainer from '../websites/websitesContainer';

const Home = () => {
  return (
    <HomeStyles>
      <div className="upper-section">
        <div className="greeting-section">
          <Welcome />
          <Date />
        </div>
        <Weather />
      </div>
      <div className="bottom-section">
        <GmailContainer />
        <div className="search-section">
          <GoogleContainer />
          <WebsitesContainer />
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;
