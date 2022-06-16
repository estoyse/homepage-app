import React from 'react';
import { HackerNewsStyles } from '../../styles/hackerNewsStyles';
import { HackerArticleStyles } from '../../styles/hackerArticleStyles';
import Loading from '../loading';
import { FaHackerNewsSquare } from 'react-icons/fa';
import { getTimeFromNow } from '../../helpers/date';

const HackerNews = ({ loading, news }) => {
  return (
    <HackerNewsStyles>
      <div className="news">
        <div className="header">
          <h3>Hacker News</h3>
        </div>
        <div className="main">
          {loading ? (
            <Loading />
          ) : news.length > 0 ? (
            <div className="articles">
              {news.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HackerArticleStyles key={item.id} className="article">
                    <div className="image">
                      <FaHackerNewsSquare
                        style={{
                          width: '100%',
                          height: '100%',
                          color: '#df2525',
                        }}
                      />
                    </div>
                    <div className="news-content">
                      <h3 className="title">{item.title}</h3>
                      <p className="date">{getTimeFromNow(item.time)}</p>
                    </div>
                  </HackerArticleStyles>
                </a>
              ))}
            </div>
          ) : (
            <div className="nodata">There are no News in here</div>
          )}
        </div>
      </div>
    </HackerNewsStyles>
  );
};

export default HackerNews;
