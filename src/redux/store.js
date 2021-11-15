import { configureStore } from "@reduxjs/toolkit";
const test = ["hey"];

export const store = configureStore({
  reducer: {
    test: test,
  },
});
