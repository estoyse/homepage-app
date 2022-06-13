import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SingleWebsite = ({ website, deleteWebsite }) => {
  return (
    <div className="website translate-top-on-hover">
      <a href={website.url} target="_blank" rel="noopener noreferrer">
        <div className="website__img">
          <img src={website.icon} alt={website.name} />
        </div>
        <p className="website__name">{website.name}</p>
      </a>
      <button
        className="website__delete rotate-on-hover"
        onClick={(e) => deleteWebsite(e, website.id)}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default SingleWebsite;
