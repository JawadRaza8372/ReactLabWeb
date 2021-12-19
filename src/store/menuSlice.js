import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload.menu;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
