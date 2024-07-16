import React from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import {
  useGetPopularMoviesQuery,
  useGetPopularTVShowsQuery,
} from '../redux/services/api';
import SliderItem from '../components/SliderItem';

const ListPage = () => {
  const { category } = useParams();
  const { data: movies } = useGetPopularMoviesQuery(undefined, {
    skip: category !== 'movies',
  });
  const { data: tvShows } = useGetPopularTVShowsQuery(undefined, {
    skip: category !== 'tv-series',
  });

  const items = category === 'movies' ? movies?.results : tvShows?.results;

  return (
    <div>
      <CardList category={category}>
        {items?.map((item) => (
          <SliderItem key={item.id} item={item} category={category} />
        ))}
      </CardList>
    </div>
  );
};

export default ListPage;
