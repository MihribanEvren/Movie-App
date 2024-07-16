import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import tvShowsReducer from './slices/tvShowsSlice';
import categoryReducer from './slices/categorySlice';
import { moviesApi, tvShowsApi } from './services/api';
import { searchMoviesAndTVShowsApi } from './services/api';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    category: categoryReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [tvShowsApi.reducerPath]: tvShowsApi.reducer,
    [searchMoviesAndTVShowsApi.reducerPath]: searchMoviesAndTVShowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      tvShowsApi.middleware,
      searchMoviesAndTVShowsApi.middleware
    ),
});
