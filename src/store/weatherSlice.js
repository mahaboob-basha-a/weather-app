import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'f0d68761dc7642310ab2b98cd5b30234';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await axios.get(`${BASE_URL}?q=${city},IN&appid=${API_KEY}&units=metric`);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default weatherSlice.reducer;
