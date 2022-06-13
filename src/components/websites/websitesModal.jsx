import React, { useState } from 'react';
import { ModalStyles } from '../../styles/modalStyles';
import { websitesModalState } from '../../state/atoms';
import { useRecoilState } from 'recoil';
import { RiCloseLine } from 'react-icons/ri';

const WebsitesModal = ({ addWebsite }) => {
  const [open, setOpen] = useRecoilState(websitesModalState);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWebsite(url, name);
    setTimeout(() => setOpen(false), 200);
    setName('');
    setUrl('');
  };
  return (
    <ModalStyles className={open ? 'open' : ''} height="50vh" width="30%">
      <RiCloseLine
        className="modal-close"
        onClick={() => {
          setOpen(false);
          setName('');
          setUrl('');
        }}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul className="preferences">
          <li className="bgOpacity">
            <h2>Website Name</h2>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="15"
            />
          </li>
          <li className="bgOpacity">
            <h2>Website URL</h2>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </ModalStyles>
  );
};

export default WebsitesModal;
