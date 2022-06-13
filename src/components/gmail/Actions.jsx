import React from 'react';
import { TiArrowRight } from 'react-icons/ti';
import { FaSignOutAlt, FaSyncAlt } from 'react-icons/fa';
import { ActionStyles } from '../../styles/actionStyles';
import Tooltip from 'react-tooltip-lite';

const Actions = ({ logOut, link, reload }) => {
  return (
    <ActionStyles>
      <div className="buttons">
        <Tooltip content="Refresh" direction={'up'} arrow={false}>
          <FaSyncAlt onClick={reload} cursor="pointer" className='rotate-on-hover'/>
        </Tooltip>
        <Tooltip content="Log Out" direction={'up'} arrow={false}>
          <FaSignOutAlt onClick={logOut} cursor="pointer" />
        </Tooltip>
      </div>
      <a href={link} className="translate-on-hover">
        See More <TiArrowRight />
      </a>
    </ActionStyles>
  );
};

export default Actions;
