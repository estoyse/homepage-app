import React, { useEffect, useState } from 'react';
import News from './news';

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { value: '', name: 'All' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' },
  ];
  const API_KEY = '0fc52f7f67404a76b1937e9f80a026c3';

  const fetchNews = async () => {
    const URL = selectedCategory
      ? `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    setLoading(true);
    await fetch(URL).then((res) =>
      res.json().then((data) => {
        let rowNews = [];
        data.articles.map((article) => {
          let articleStructure = {
            title: article.title,
            url: article.url,
            img: article.urlToImage,
            description: article.description,
          };
          rowNews.push(articleStructure);
        });

        setNews(rowNews);
        setLoading(false);
      })
    );
  };

  useEffect(fetchNews, [selectedCategory]);

  return (
    <News
      loading={loading}
      news={news}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default NewsContainer;
