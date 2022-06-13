import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNameState } from '../../state/atoms';

const Welcome = () => {
  const username = useRecoilValue(userNameState);
  return (
    <div className="welcome">
      <h3 className="welcome-text">Welcome, {username}!</h3>
    </div>
  );
};

export default Welcome;
