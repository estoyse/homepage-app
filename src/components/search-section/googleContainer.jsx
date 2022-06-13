import React from 'react';
import Google from './google';

const GoogleContainer = () => {
  const handleSubmit = (e, query) => {
    e.preventDefault();
    window.open(`https://google.com/search?q=${query}`, '_blank');
  };
  return <Google handleSubmit={handleSubmit} />;
};

export default GoogleContainer;
