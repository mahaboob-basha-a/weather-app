import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer
  },
});

export default store;
