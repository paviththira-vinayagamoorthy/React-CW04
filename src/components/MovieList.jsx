import MovieItem from "./MovieItem";

function MovieList({ movies, toggleWatched, removeMovie }) {
  if (movies.length === 0) {
    return (
      <p className="py-8 text-center text-gray-500">
        No movies added yet.
      </p>
    );
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          toggleWatched={toggleWatched}
          removeMovie={removeMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;