import React, { useEffect, useState } from 'react';
import Images from './images';

const ImagesContainer = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const CLIENT_ID = 'g16g34Lkbrag-fSdkvlR2Kfl1Q4A_OWOqwOWt2HoAfE';

  function Image(id, download, backgroundUrl, thumb, username) {
    this.id = id;
    this.url = download;
    this.backgroundUrl = backgroundUrl;
    this.thumb = thumb;
    this.username = username;
  }

  const fetchImages = async () => {
    setLoading(true);
    const URL = `https://api.unsplash.com/photos?&page=${page}&per_page=20&client_id=${CLIENT_ID}`;

    await fetch(URL).then((res) =>
      res.json().then((data) => {
        const rowImages = [];
        console.log(data);
        data.forEach((el) => {
          let image = new Image(
            el.id,
            el.links.html,
            el.urls.regular,
            el.urls.small,
            el.user.first_name
          );
          rowImages.push(image);
        });
        setImages(rowImages);
        setLoading(false);
      })
    );
  };
  const searchImages = async () => {
    if (query == '') return;

    setPage(1);
    setLoading(true);
    const URL = `https://api.unsplash.com/search/photos?&page=${page}&per_page=30&query=${query}&client_id=${CLIENT_ID}`;

    await fetch(URL).then((res) =>
      res.json().then((data) => {
        const rowImages = [];
        console.log(data);
        data.results.forEach((el) => {
          let image = new Image(
            el.id,
            el.links.html,
            el.urls.regular,
            el.urls.small,
            el.user.first_name
          );
          rowImages.push(image);
        });
        setImages(rowImages);
        setLoading(false);
      })
    );
  };

  useEffect(searchImages, [query]);
  useEffect(fetchImages, [page]);

  return (
    <Images
      setQuery={setQuery}
      page={page}
      setPage={setPage}
      images={images}
      loading={loading}
    />
  );
};

export default ImagesContainer;
