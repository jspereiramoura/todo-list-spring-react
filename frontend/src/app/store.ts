import { configureStore } from "@reduxjs/toolkit";
import { todoItemApi } from "./apis/todoItem.api";

export const store = configureStore({
  reducer: {
    [todoItemApi.reducerPath]: todoItemApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todoItemApi.middleware)
});
