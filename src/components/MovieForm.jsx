import { useRef, useState } from "react";

function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieTitle.trim() === "") {
      inputRef.current.focus();
      return;
    }

    addMovie(movieTitle);

    setMovieTitle("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter movie name..."
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Add Movie
      </button>
    </form>
  );
}

export default MovieForm;