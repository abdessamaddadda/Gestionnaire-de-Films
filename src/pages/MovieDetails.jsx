import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id < 1e12) {
      // Les films provenant de l'API TMDb
      getMovieDetails(id).then(setMovie);
    } else {
      // Gestion des films ajoutés localement
      const customMovies = JSON.parse(localStorage.getItem("customMovies")) || [];
      setMovie(customMovies.find((m) => m.id === Number(id)));
    }
  }, [id]);

  if (!movie) {
    return <div className="text-center text-white">Chargement...</div>;
  }

  return (
    <div className="container py-5 text-white">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? movie.poster_path.startsWith("http")
                  ? movie.poster_path
                  : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=Pas+d'image"
            }
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">{movie.title}</h1>
          <p><strong>Description :</strong> {movie.overview}</p>
          <p><strong>Date de sortie :</strong> {movie.release_date || "Inconnue"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
