import { createSlice } from '@reduxjs/toolkit';
import { tvShowsApi } from '../services/api';

const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: {
    list: [],
    details: {},
    topTVShows: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        tvShowsApi.endpoints.getPopularTVShows.matchFulfilled,
        (state, { payload }) => {
          state.list = payload.results;
          state.topTVShows = payload.results.slice(0, 5);
        }
      )
      .addMatcher(
        tvShowsApi.endpoints.getTVShowDetails.matchFulfilled,
        (state, { payload }) => {
          state.details[payload.id] = payload;
        }
      );
  },
});

export default tvShowsSlice.reducer;
