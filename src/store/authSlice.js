import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload.user === null) {
        state.user = null;
      } else {
        state.user = action.payload.user;
      }
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
