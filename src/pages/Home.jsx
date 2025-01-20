import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieList from "../components/MovieList";

const Home = ({ customMovies }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies([...customMovies, ...data]); // Combine les films ajoutés et ceux de l'API
    });
  }, [customMovies]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Films Populaires</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
