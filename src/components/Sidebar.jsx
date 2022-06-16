import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarStyles } from '../styles/SidebarStyles';
import {
  FiHome,
  FiSettings,
  FiImage,
  FiTrello,
  FiFilm,
  FiMonitor,
} from 'react-icons/fi';
import { settingsModalOpen } from '../state/atoms';
import Tooltip from 'react-tooltip-lite';
import { useRecoilState } from 'recoil';

const Sidebar = () => {
  const [modalOpen, setMoadalOpen] = useRecoilState(settingsModalOpen);

  return (
    <SidebarStyles>
      <div>
        <Tooltip content="Home" direction={'up'} arrow={false}>
          <NavLink to="/">
            <FiHome />
          </NavLink>
        </Tooltip>
      </div>
      <ul className="nav-links">
        <li>
          <Tooltip content="News" direction={'up'} arrow={false}>
            <NavLink to="/news">
              <FiTrello />
            </NavLink>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Hacker News" direction={'up'} arrow={false}>
            <NavLink to="/hackernews">
              <FiMonitor />
            </NavLink>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Movies" direction={'up'} arrow={false}>
            <NavLink to="/movies">
              <FiFilm />
            </NavLink>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Images" direction={'up'} arrow={false}>
            <NavLink to="/images">
              <FiImage />
            </NavLink>
          </Tooltip>
        </li>
      </ul>
      <Tooltip content="Settings" direction={'up'} arrow={false}>
        <div style={{ cursor: 'pointer' }}>
          <FiSettings onClick={() => setMoadalOpen(!modalOpen)} />
        </div>
      </Tooltip>
    </SidebarStyles>
  );
};

export default Sidebar;
