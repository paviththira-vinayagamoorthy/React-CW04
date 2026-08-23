function MovieItem({ movie, toggleWatched, removeMovie }) {
  return (
    <div className="mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800">
      <div>
        <h3
          className={`text-lg font-semibold ${
            movie.watched ? "text-gray-400 line-through" : ""
          }`}
        >
          {movie.title}
        </h3>

        <p className="text-sm text-gray-500">
          {movie.watched ? "Watched" : "Not Watched"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => toggleWatched(movie.id)}
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          {movie.watched ? "Unwatch" : "Watched"}
        </button>

        <button
          onClick={() => removeMovie(movie.id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default MovieItem;