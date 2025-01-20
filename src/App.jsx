import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [customMovies, setCustomMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("customMovies")) || [];
  });

  const handleAddMovie = (movie) => {
    const updatedMovies = [...customMovies, movie];
    setCustomMovies(updatedMovies);
    localStorage.setItem("customMovies", JSON.stringify(updatedMovies));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home customMovies={customMovies} />} />
          <Route path="/recherche" element={<Search />} />
          <Route
            path="/ajouter"
            element={<AddMovie onAddMovie={handleAddMovie} />}
          />
          <Route path="/film/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
