import { createSlice } from "@reduxjs/toolkit";

const todaySlice = createSlice({
  name: "todayTasks",
  initialState: {
    ids: [],
  },
  reducers: {
    addTodayTask: (state, action) => {
      state.ids.push(action.payload);
    },
    removeTodayTask: (state, action) => {
      state.ids = state.ids.filter((item) => item !== action.payload);
    },
  },
});

export const { addTodayTask, removeTodayTask } = todaySlice.actions;
export default todaySlice.reducer;
