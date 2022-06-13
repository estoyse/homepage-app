import React, { useState } from 'react';
import { ImagesStyles } from '../../styles/imagesStyles';
import { FiClipboard, FiExternalLink } from 'react-icons/fi';
import Loading from '../loading';
import Tooltip from 'react-tooltip-lite';

const Images = ({ setQuery, loading, images, setPage, page }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <ImagesStyles>
      <div className="header">
        <h3>Images</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for Images"
          />
        </form>
        <div className="buttons">
          <button onClick={() => setPage(--page)} disabled={page <= 1}>
            Prev
          </button>
          <button onClick={() => setPage(++page)}>Next</button>
        </div>
      </div>
      <div className="main">
        {loading ? (
          <Loading />
        ) : (
          images?.map((image) => (
            <div className="card" key={image.id}>
              <div className="img-container">
                <img src={image.thumb} alt="" />
              </div>
              <div className="main-body">
                <h3 className="username">{image.username}</h3>
                <div className="buttons">
                  <Tooltip content="Image source" arrow={false} className="btn">
                    <a href={image.url}>
                      <FiExternalLink />
                    </a>
                  </Tooltip>
                  <Tooltip content="copy URL" arrow={false} className="btn">
                    <FiClipboard
                      cursor="pointer"
                      onClick={() =>
                        navigator.clipboard
                          .writeText(image.backgroundUrl)
                          .then(() => alert('copied!'))
                      }
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </ImagesStyles>
  );
};

export default Images;
