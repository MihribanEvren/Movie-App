import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '66afd9951b1f08de4bfb6d69aab2c648';
const BASE_URL = 'https://api.themoviedb.org/3';

const createRequest = (url) => `${url}?api_key=${API_KEY}`;

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => createRequest('/movie/popular'),
    }),
    getMovieDetails: builder.query({
      query: (id) => createRequest(`/movie/${id}`),
    }),
  }),
});

export const tvShowsApi = createApi({
  reducerPath: 'tvShowsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularTVShows: builder.query({
      query: () => createRequest('/tv/popular'),
    }),
    getTVShowDetails: builder.query({
      query: (id) => createRequest(`/tv/${id}`),
    }),
  }),
});

export const searchMoviesAndTVShowsApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchMoviesAndTVShows: builder.query({
      query: (searchTerm) => createRequest(`/search/multi?query=${searchTerm}`),
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetMovieDetailsQuery } = moviesApi;
export const { useGetPopularTVShowsQuery, useGetTVShowDetailsQuery } =
  tvShowsApi;
export const { useSearchMoviesAndTVShowsQuery } = searchMoviesAndTVShowsApi;
