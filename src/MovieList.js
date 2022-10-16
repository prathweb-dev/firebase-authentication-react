import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./contexts/MovieContext";

function MovieList() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="movieList">
            {movies.map((movie) => (
                <Movie
                    name={movie.name}
                    price={movie.price}
                    id={movie.id}
                    movies={movies}
                    setMovies={setMovies}
                />
            ))}
        </div>
    );
}

export default MovieList;
