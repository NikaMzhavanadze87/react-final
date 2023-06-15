import axios from 'axios';

const API_KEY = '29ade59cadd544d1822235052231406';
const location = 'Tbilisi';

export const fetchWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchUniversities = async (country) => {
  try {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?country=${country}`
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
