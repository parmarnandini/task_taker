import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  });
const newsSlice = createSlice({
  name: 'news',
  initialState: { articles: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
