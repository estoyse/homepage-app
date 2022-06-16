import { useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Home from './components/home/Home';
import Movies from './components/movies/movies';
import NewsContainer from './components/news/newsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {
  backgroundOpacityState,
  userCityState,
  userNameState,
} from './state/atoms';
import './styles/main.css';
import ImagesContainer from './components/images/imagesContainer';
import HackernewsContainer from './components/heckerNews/hackerNewsContainer';

function App() {
  const setBgOpacity = useSetRecoilState(backgroundOpacityState);
  const setUserCity = useSetRecoilState(userCityState);
  const setUsername = useSetRecoilState(userNameState);

  useEffect(() => {
    if (localStorage.getItem('bgOpacity'))
      setBgOpacity(localStorage.getItem('bgOpacity'));
    if (localStorage.getItem('username'))
      setUsername(localStorage.getItem('username'));
    if (localStorage.getItem('city')) setUserCity(localStorage.getItem('city'));
  }, []);
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/news" element={<NewsContainer />} />
          <Route exact path="/hackernews" element={<HackernewsContainer />} />
          <Route exact path="/images" element={<ImagesContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
