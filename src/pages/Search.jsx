import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Rechercher un Film</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Rechercher..."
          className="form-control mb-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">
          Rechercher
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Search;
