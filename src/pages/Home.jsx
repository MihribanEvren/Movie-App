import Banner from '../components/Banner';
import MovieSlider from '../components/MovieSlider';
import { useGetPopularMoviesQuery } from '../redux/services/api';

function Home() {
  const { data: movies, isLoading, isError } = useGetPopularMoviesQuery();
  console.log(movies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  const topFiveMovies = movies.results.slice(0, 5);

  return (
    <div>
      <MovieSlider movies={topFiveMovies} />
    </div>
  );
}

export default Home;
