import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer';
import universityReducer from './reducers/universityReducer';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    universities: universityReducer,
  },
});

export default store;