import React from "react";

export default function Movies({ movies }) {
  console.log(movies);
  return (
    <div className="row align-items-start">
      {movies?.map((movie) => (
        <div
          key={movie.imdbID}
          className="col-sm-6 col-md-3 col-lg-2 my-4 text-center"
        >
          <img
            style={{ width: "150px" }}
            className="img-fluid rounded"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      ))}
    </div>
  );
}
