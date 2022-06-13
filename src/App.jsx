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

function App() {
  const setBgOpacity = useSetRecoilState(backgroundOpacityState);
  const setUserCity = useSetRecoilState(userCityState);
  const setUsername = useSetRecoilState(userNameState);

  useEffect(() => {
    setBgOpacity(localStorage.getItem('bgOpacity'));
    setUserCity(localStorage.getItem('city'));
    setUsername(localStorage.getItem('username'));
  }, []);
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/news" element={<NewsContainer />} />
          <Route exact path="/images" element={<ImagesContainer />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
