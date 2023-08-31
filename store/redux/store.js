import { configureStore } from "@reduxjs/toolkit";

import todayReducer from "./todaySlice";
import listsReducer from "./listsSlice";
import tasksReducer from "./tasksSlice";
import completedTasksReducer from "./completedTasksSlice";

const store = configureStore({
  reducer: {
    todayTasks: todayReducer,
    listsReducer: listsReducer,
    tasksReducer: tasksReducer,
    completedTasksReducer: completedTasksReducer,
  },
});

export default store;
