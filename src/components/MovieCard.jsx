import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-dark text-white mb-3">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=Aucune+Image" // Image par défaut
        }
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-truncate">{movie.overview}</p>
        <Link to={`/film/${movie.id}`} className="btn btn-primary">
          Détails
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
