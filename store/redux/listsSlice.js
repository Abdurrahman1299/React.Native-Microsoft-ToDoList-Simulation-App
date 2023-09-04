import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
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
