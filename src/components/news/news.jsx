import React from 'react';
import { NewsStyles } from '../../styles/newsStyles';
import Loading from '../loading';
import { dateToString } from '../../helpers/date';
import { ArticleStyles } from '../../styles/articleStyles';

const News = ({
  categories,
  loading,
  news,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <NewsStyles>
      <div className="news">
        <div className="header">
          <ul>
            {categories.map((cat) => (
              <button
                className={selectedCategory == cat.value ? 'btn active' : 'btn'}
                value={cat.value}
                key={cat.name}
                onClick={(e) => setSelectedCategory(e.target.value)}
              >
                {cat.name}
              </button>
            ))}
          </ul>
        </div>
        <div className="main">
          {loading ? (
            <Loading />
          ) : news.length > 0 ? (
            <div className="articles">
              {news.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArticleStyles className="article">
                    <div
                      className="article__img"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className="article__meta">
                        <p className="article__meta__date">
                          {dateToString(item.date)}
                        </p>
                        <div className="article__meta__desc">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="article__title">{item.title}</h3>
                  </ArticleStyles>
                </a>
              ))}
            </div>
          ) : (
            <div className="nodata">There are no News in here</div>
          )}
        </div>
      </div>
    </NewsStyles>
  );
};

export default News;
