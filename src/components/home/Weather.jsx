import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userCityState } from '../../state/atoms';
import { WeatherStyles } from '../../styles/homestyles/weatherStyles';
import axios from 'axios';
import Loading from '../loading';
import { WeatherIcon } from '../../helpers/weahterIcon';

const Weather = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const userCity = useRecoilValue(userCityState);
  const [error, setError] = useState('');

  useEffect(async () => {
    const KEY = 'f8482c208c6d5f73b7a45157bdd459d4';

    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=${KEY}`;
    await axios
      .get(url)
      .then((res) => {
        const dataObj = {
          city: res.data.name,
          type: res.data.weather[0].main,
          description: res.data.weather[0].description,
          temperature: Math.floor(res.data.main.temp),
          minTemperature: Math.floor(res.data.main.temp_min),
          maxTemperature: Math.floor(res.data.main.temp_max),
          icon: res.data.weather[0].icon,
        };
        setData(dataObj);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError('Error has occured while getting weather data');
      });
  }, [userCity]);

  return (
    <WeatherStyles>
      {loading ? (
        <Loading />
      ) : !error ? (
        <div className="weather">
          <WeatherIcon iconCode={data.icon} />
          <div className="description">
            <h5 className="city">{data.city}</h5>
            <p className="about">{data.description}</p>
            <p className="temp">
              <span className="temp-name">Temp</span> {data.temperature}C
              <span className="temp-name"> Min</span> {data.minTemperature}C
              <span className="temp-name"> Max</span> {data.maxTemperature}C
            </p>
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </WeatherStyles>
  );
};

export default Weather;
