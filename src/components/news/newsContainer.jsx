import React, { useEffect, useState } from 'react';
import axios from 'axios';
import News from './news';

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {
        textFormat: 'Raw',
        safeSearch: 'Off',
        cc: 'us',
        originalImg: true,
      },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'ff659c7d01mshd379011670edc86p177cecjsn7262520f953d',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      },
    };

    await axios
      .request(options)
      .then((response) => {
        setNews(response.data.value);
        console.log(response.data.value);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };
  useEffect(fetchNews, []);
  return <News news={news} loading={loading} error={error} />;
};

export default NewsContainer;
/* {
   id: uuidv4(),
            title: article.name,
            url: article.url,
            image: article.image.thumbnail.contentUrl,
            date: article.datePublished,
}, */
