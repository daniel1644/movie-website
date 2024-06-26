import React, { useState } from 'react';
import Header from './Components/Header';
import FavoriteList from './Components/FavoriteList';
import AddMovieForm from './Components/AddMovieForm';
import MoviesPage from './Components/HomePage'; 
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(fav => fav.id !== movie.id));
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <AddMovieForm onAddMovie={addMovie} />
        {/* the component */}
        <MoviesPage searchTerm={searchTerm} addFavorite={addFavorite} favorites={favorites} movies={movies} />
        <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
      </main>
    </div>
  );
}

export default App;