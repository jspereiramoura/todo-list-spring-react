import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoItemModel } from "../models/TodoItem.model";

export const todoItemApi = createApi({
  reducerPath: "todoItem",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["TODO_ITEM"],
  endpoints: builder => ({
    getTodoItems: builder.query<TodoItemModel[], void>({
      query: () => "/",
      providesTags: ["TODO_ITEM"]
    }),
    setStatus: builder.mutation({
      query: (item: { id: number; status: boolean }) => ({
        url: `/${item.id}`,
        method: "PUT",
        body: { status: item.status }
      }),
      invalidatesTags: ["TODO_ITEM"]
    }),
    createNewTodoItem: builder.mutation<TodoItemModel, Partial<TodoItemModel>>({
      query: (newItem: TodoItemModel) => ({
        url: "/",
        method: "POST",
        body: newItem
      }),
      invalidatesTags: ["TODO_ITEM"]
    })
  })
});

export const { useGetTodoItemsQuery, useCreateNewTodoItemMutation, useSetStatusMutation } =
  todoItemApi;
