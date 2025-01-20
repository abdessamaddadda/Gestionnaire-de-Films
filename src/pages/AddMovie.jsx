import { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Nouveau champ pour l'URL de l'image

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(), // ID unique pour les films ajoutés manuellement
      title,
      overview: description,
      release_date: releaseDate || "Inconnue",
      poster_path: imageUrl || null, // Stocke l'image ou null si aucun URL n'est fourni
    };

    onAddMovie(newMovie);
    setTitle("");
    setDescription("");
    setReleaseDate("");
    setImageUrl("");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Ajouter un Film</h1>
      <form onSubmit={handleSubmit} className="text-white">
        <input
          type="text"
          placeholder="Titre"
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="form-control mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="date"
          className="form-control mb-3"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de l'image"
          className="form-control mb-3"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit" className="btn btn-success w-100">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
