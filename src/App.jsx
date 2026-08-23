import { useCallback, useContext, useReducer } from "react";

import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import MovieStats from "./components/MovieStats";
import { ThemeContext } from "./context/ThemeContext";

const initialMovies = [];

function movieReducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          watched: false,
        },
      ];

    case "TOGGLE_WATCHED":
      return state.map((movie) =>
        movie.id === action.payload
          ? { ...movie, watched: !movie.watched }
          : movie
      );

    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [movies, dispatch] = useReducer(movieReducer, initialMovies);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const addMovie = useCallback((title) => {
    dispatch({
      type: "ADD_MOVIE",
      payload: title,
    });
  }, []);

  const toggleWatched = useCallback((id) => {
    dispatch({
      type: "TOGGLE_WATCHED",
      payload: id,
    });
  }, []);

  const removeMovie = useCallback((id) => {
    dispatch({
      type: "REMOVE_MOVIE",
      payload: id,
    });
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
               Favorite Movies
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Manage your favorite movies
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-lg bg-gray-800 px-4 py-2 font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <MovieForm addMovie={addMovie} />

        <MovieStats movies={movies} />

        <MovieList
          movies={movies}
          toggleWatched={toggleWatched}
          removeMovie={removeMovie}
        />
      </div>
    </div>
  );
}

export default App;