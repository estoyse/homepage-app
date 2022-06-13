import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Tooltip from 'react-tooltip-lite';
import { useSetRecoilState } from 'recoil';
import { websitesModalState } from '../../state/atoms';

const AddWebsite = ({ websites }) => {
  const setOpen = useSetRecoilState(websitesModalState);

  const handleClick = () => {
    if (websites.length > 7) {
      alert('tray is full! to add, please delete unused ones first');
      return;
    }
    setOpen(true);
  };
  return (
    <div
      className="actions"
      style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <Tooltip content="Add Shortcut" arrow={false}>
        <FaPlus onClick={handleClick} cursor="pointer" />
      </Tooltip>
    </div>
  );
};

export default AddWebsite;
