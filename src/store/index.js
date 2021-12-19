import { configureStore } from "@reduxjs/toolkit";
import menu from "./menuSlice";
import codeSni from "./codeSniSlice";
import auth from "./authSlice";
export const store = configureStore({
  reducer: { menu, codeSni, auth },
});
