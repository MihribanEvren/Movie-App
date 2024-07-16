import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import SearchResultsPage from './pages/SearchResultsPage';
import CardDetailPage from './pages/CardDetailPage';

function router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<ListPage />} />
        <Route path="/:category/:id" element={<CardDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default router;
