import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import tvShowsReducer from './slices/tvShowsSlice';
import { moviesApi, tvShowsApi } from './services/api';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [tvShowsApi.reducerPath]: tvShowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, tvShowsApi.middleware),
});
