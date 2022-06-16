import React from 'react';
import { dateToString } from '../../helpers/date';
import { ArticleStyles } from '../../styles/articleStyles';

const Article = ({ title, date, image, url }) => {
  return (
    <ArticleStyles className="article">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="article">
          <div
            className="article__img"
            style={{
              background: `url(${
                image
                  ? image
                  : 'https://logos-world.net/wp-content/uploads/2021/02/Bing-Logo.png'
              }) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="article__meta">
              <p className="article__meta__date">{dateToString(date)}</p>
              <div className="article__meta__desc">
                <p></p>
              </div>
            </div>
          </div>
          <h3 className="article__title">{title}</h3>
        </div>
      </a>
    </ArticleStyles>
  );
};

export default Article;
