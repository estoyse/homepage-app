import React from 'react';

const Loading = () => {
  return (
    <div className="loading" style={{ height: '100%' }}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
