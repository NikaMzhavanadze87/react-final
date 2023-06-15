import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../api';
import { setWeather } from '../redux/actions/weatherActions';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeather();
      dispatch(setWeather(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <header className="header">
      {weather.current && (
        <div className="weather-card">
          <h2>Tbilisi</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
