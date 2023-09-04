import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedTasks: [],
};

const completedTasksSlice = createSlice({
  name: "completedTasks",
  initialState,
  reducers: {
    addCompletedTask: (state, action) => {
      state.completedTasks.push(action.payload);
    },

    removeCompletedTask: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        (item) => item.id !== action.payload
      );
    },

    removeListCompletedTasks: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        // (item) => item.listTitle !== action.payload.listTitle
        (item) => item.listTitle.slice(0, -9) !== action.payload
      );
    },
  },
});

export const {
  addCompletedTask,
  removeCompletedTask,
  removeListCompletedTasks,
} = completedTasksSlice.actions;
export default completedTasksSlice.reducer;
