import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.title === "") return;
      state.tasks = [action.payload, ...state.tasks];
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },

    removeListTasks: (state, action) => {
      state.tasks = state.tasks.filter(
        (item) => item.listTitle !== action.payload
      );
    },

    removeAllTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, removeTask, removeListTasks, removeAllTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
