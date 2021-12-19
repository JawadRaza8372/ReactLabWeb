import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeSni: null,
};

export const codeSniSlice = createSlice({
  name: "codeSni",
  initialState,
  reducers: {
    setcodeSni: (state, action) => {
      if (action.payload.codeSni === null) {
        state.codeSni = null;
      } else {
        state.codeSni = action.payload.codeSni;
      }
    },
  },
});

export const { setcodeSni } = codeSniSlice.actions;

export default codeSniSlice.reducer;
