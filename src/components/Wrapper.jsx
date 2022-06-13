import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { WrapperStyles } from '../styles/WrapperStyles';
import Sidebar from '../components/Sidebar';
import Settings from './Settings';
import { backgroundImgState, backgroundOpacityState } from '../state/atoms';

const Wrapper = ({ children }) => {
  const [background, setBackground] = useRecoilState(backgroundImgState);
  const [opacity] = useRecoilState(backgroundOpacityState);
  useEffect(() => {
    if (localStorage.getItem('bgUrl'))
      setBackground(localStorage.getItem('bgUrl'));
  }, []);
  return (
    <WrapperStyles background={background} bgOpacity={opacity}>
      <div className="content">
        <Settings />
        <Sidebar />
        {children}
      </div>
    </WrapperStyles>
  );
};

export default Wrapper;
