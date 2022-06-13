import React from 'react';
import SingleWebsite from './singleWebsite';

const Websites = ({ deleteWebsite, websites }) => {
  return (
    <>
      {websites.length > 0 ? (
        websites.map((website) => (
          <SingleWebsite
            website={website}
            deleteWebsite={deleteWebsite}
            key={website.id}
          />
        ))
      ) : (
        <div className="nodata">There are no websites in here</div>
      )}
    </>
  );
};

export default Websites;
