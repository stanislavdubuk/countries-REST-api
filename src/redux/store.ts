import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
