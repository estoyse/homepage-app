import React, { useEffect, useState } from 'react';
import { ModalStyles } from '../styles/modalStyles';
import { RiCloseLine } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import {
  settingsModalOpen,
  backgroundOpacityState,
  userCityState,
  userNameState,
  backgroundImgState,
} from '../state/atoms';

const Settings = () => {
  const [open, isOpen] = useRecoilState(settingsModalOpen);
  const [bgOpacity, setBgOpacity] = useRecoilState(backgroundOpacityState);
  const [city, setCity] = useRecoilState(userCityState);
  const [username, setUsername] = useRecoilState(userNameState);
  const [bgUrl, setBgUrl] = useRecoilState(backgroundImgState);

  const [weatherQuery, setWeatherQuery] = useState(city);

  const saveToLocalStorage = () => {
    setCity(weatherQuery);
    localStorage.setItem('username', username);
    localStorage.setItem('city', weatherQuery);
    localStorage.setItem('bgOpacity', bgOpacity);
    localStorage.setItem('bgUrl', bgUrl);
    setTimeout(() => isOpen(false), 300);
  };
  const readFromLocalStorage = () => {
    setUsername(localStorage.getItem('username'));
    setCity(localStorage.getItem('city'));
    setBgUrl(localStorage.getItem('bgUrl'));
    setBgOpacity(localStorage.getItem('bgOpacity'));
    setWeatherQuery(city);
  };

  return (
    <ModalStyles className={open ? 'open' : ''}>
      <RiCloseLine
        className="modal-close"
        onClick={() => {
          isOpen(false);
          readFromLocalStorage();
        }}
      />
      <div
        className="box"
        style={{ position: 'relative', overflowY: 'scroll', height: '80%' }}
      >
        <ul className="preferences">
          <li className="bgOpacity">
            <h2>
              Background Opacity: <span>{bgOpacity}</span>
            </h2>
            <input
              type="range"
              max={1}
              min={0}
              step={0.05}
              value={bgOpacity}
              onChange={(e) => setBgOpacity(e.target.value)}
            />
          </li>
          <li className="user-city">
            <h2>Your City (for Weather)</h2>
            <input
              type="text"
              value={weatherQuery}
              onChange={(e) => setWeatherQuery(e.target.value)}
            />
          </li>
          <li className="user-name">
            <h2>Your Name</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="bg">
            <h2>Background Image URL</h2>
            <input
              type="text"
              value={bgUrl}
              onChange={(e) => setBgUrl(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <button className="save-button" onClick={saveToLocalStorage}>
        Save
      </button>
    </ModalStyles>
  );
};

export default Settings;
