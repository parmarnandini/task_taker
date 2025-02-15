import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: '', 
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = ''; 
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
