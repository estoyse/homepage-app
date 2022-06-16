import React, { useEffect, useState } from 'react';
import HackerNews from './hackerNews';

const HackerNewsContainer = () => {
  const [news, setNews] = useState([]);
  const [newsIds, setNewsIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsIds = async () => {
    setLoading(true);
    const URL =
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    await fetch(URL).then((res) =>
      res.json().then((data) => setNewsIds(data.slice(0, 50)))
    );
  };
  const fetchNews = async () => {
    setLoading(true);

    newsIds.forEach((id) => {
      const allNews = [];
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
      fetch(url).then((res) =>
        res.json().then(
          (res) => {
            const singleNews = {
              id: res.id,
              time: res.time,
              title: res.title,
              url: res.url,
            };
            setNews((prevState) => [...prevState, singleNews]);
            allNews.push(singleNews);
          },
          () => {
            console.log('Error getting single news');
          }
        )
      );
    });
    setLoading(false);
  };
  useEffect(fetchNewsIds, []);

  useEffect(() => {
    if (newsIds.length > 1) fetchNews();
  }, [newsIds]);

  return <HackerNews loading={loading} news={news} />;
};

export default HackerNewsContainer;
