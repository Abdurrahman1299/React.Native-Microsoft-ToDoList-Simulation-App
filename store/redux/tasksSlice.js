import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, listTitle: "list1", title: "task1" },
    { id: 2, listTitle: "list2", title: "task2" },
    { id: 3, listTitle: "list3", title: "task3" },
    { id: 4, listTitle: "list4", title: "task4" },
    { id: 5, listTitle: "list5", title: "task5" },
    { id: 6, listTitle: "list1", title: "task6" },
    { id: Math.random() * 89328, listTitle: "list4", title: "task7" },
    { id: Math.random() * 89328, listTitle: "list5", title: "task8" },
    { id: Math.random() * 89328, listTitle: "list4", title: "task9" },
    { id: Math.random() * 89328, listTitle: "list1", title: "task10" },
    { id: Math.random() * 89328, listTitle: "list4", title: "task11" },
    { id: Math.random() * 89328, listTitle: "list2", title: "task12" },
    { id: Math.random() * 89328, listTitle: "list3", title: "task13" },
    { id: Math.random() * 89328, listTitle: "list2", title: "task14" },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
