import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import tasksReducer from './slices/tasksSlice';
import newsReducer from './slices/newsSlice';
import themeReducer from './slices/themeSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    news: newsReducer,
    theme: themeReducer,
  },
});

export default store;
