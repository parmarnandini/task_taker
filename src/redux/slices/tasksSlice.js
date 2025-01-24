import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { list: [] },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
