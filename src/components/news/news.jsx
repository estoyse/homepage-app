import React from 'react';
import { NewsStyles } from '../../styles/newsStyles';
import Article from './article';
import Loading from '../loading';
import { v4 as uuidv4 } from 'uuid';

const News = ({ news, loading, error }) => {
  return (
    <NewsStyles>
      {loading ? (
        <Loading />
      ) : (
        <div className="news">
          <div className="header">
            <h3>World News</h3>
          </div>
          <div className="main">
            <div className="articles">
              {!error ? (
                news.map((article) => (
                  <Article
                    key={uuidv4()}
                    title={article.name}
                    url={article.url}
                    image={article.image?.thumbnail.contentUrl}
                    date={article.datePublished}
                    loading={loading}
                  />
                ))
              ) : (
                <p>error occured</p>
              )}
            </div>
          </div>
        </div>
      )}
    </NewsStyles>
  );
};

export default News;
