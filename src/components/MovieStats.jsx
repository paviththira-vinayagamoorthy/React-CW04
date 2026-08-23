import { useMemo } from "react";

function MovieStats({ movies }) {
  const statistics = useMemo(() => {
    const total = movies.length;

    const watched = movies.filter((movie) => movie.watched).length;

    return {
      total,
      watched,
    };
  }, [movies]);

  return (
    <div className="mb-8 grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-blue-100 p-5 text-center dark:bg-blue-900">
        <p className="text-sm font-medium">Total Movies</p>
        <p className="text-3xl font-bold">{statistics.total}</p>
      </div>

      <div className="rounded-lg bg-green-100 p-5 text-center dark:bg-green-900">
        <p className="text-sm font-medium">Watched Movies</p>
        <p className="text-3xl font-bold">{statistics.watched}</p>
      </div>
    </div>
  );
}

export default MovieStats;