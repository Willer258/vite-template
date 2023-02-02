

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import { authSlice } from "../feature/slices/authSlice";
import { collapsedSlice } from "../feature/slices/collapsedSlice";
import { menuKeySlice } from "../feature/slices/MenuKeySlice";
import { searchPaginateSlice } from "../feature/slices/search_paginate_slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    menuKey: menuKeySlice.reducer,
    collapsedState: collapsedSlice.reducer,
    searchAndPaginate: searchPaginateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
