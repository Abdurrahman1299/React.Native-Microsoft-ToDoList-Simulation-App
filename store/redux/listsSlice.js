import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    { id: Date.now(), title: "list1" },
    { id: Date.now() + 1786, title: "list2" },
    { id: Date.now() + 2786786, title: "list3" },
    { id: Date.now() + 3786786, title: "list4" },
    { id: Date.now() + 7866784, title: "list5" },
  ],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
    },

    removeList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addList, removeList } = listsSlice.actions;
export default listsSlice.reducer;
