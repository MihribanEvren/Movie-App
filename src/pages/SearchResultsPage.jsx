import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchMoviesAndTVShowsQuery } from '../redux/services/api';
import CardList from '../components/CardList';
import SliderItem from '../components/SliderItem';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  const { data: searchResults } = useSearchMoviesAndTVShowsQuery(searchTerm);

  const items = searchResults?.results;

  return (
    <div>
      <CardList category="search-results">
        {items?.map((item) => (
          <SliderItem key={item.id} item={item} category={item.media_type} />
        ))}
      </CardList>
    </div>
  );
};

export default SearchResultsPage;
