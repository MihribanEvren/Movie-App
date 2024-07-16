import { createSlice } from '@reduxjs/toolkit';
import { moviesApi } from '../services/api';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    details: {},
    mostPopularMovie: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        moviesApi.endpoints.getPopularMovies.matchFulfilled,
        (state, { payload }) => {
          state.list = payload.results;
          state.mostPopularMovie = payload.results[0];
        }
      )
      .addMatcher(
        moviesApi.endpoints.getMovieDetails.matchFulfilled,
        (state, { payload }) => {
          state.details[payload.id] = payload;
        }
      );
  },
});

export default moviesSlice.reducer;
