import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleStyles } from '../../styles/googleStyles';

const Google = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  return (
    <GoogleStyles onSubmit={(e) => handleSubmit(e, query)}>
      <input
        type="text"
        placeholder="Search on Google"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaGoogle className="icon" />
    </GoogleStyles>
  );
};

export default Google;
