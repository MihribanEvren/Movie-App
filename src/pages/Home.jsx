import React from 'react';
import MovieSlider from '../components/MovieSlider';
import SliderItem from '../components/SliderItem';
import { useGetPopularMoviesQuery } from '../redux/services/api';

function Home() {
  const { data: movies, isLoading, isError } = useGetPopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  const topFiveMovies = movies.results.slice(0, 5);

  return (
    <div>
      <MovieSlider>
        {topFiveMovies.map((item) => (
          <SliderItem key={item.id} item={item} category="movies" />
        ))}
      </MovieSlider>
    </div>
  );
}

export default Home;
