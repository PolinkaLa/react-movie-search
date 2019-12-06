import React from "react";

const DEFAULT_IMG = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_IMG :  movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200" 
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                    />
                <p>({movie.Year})</p>
            </div>
        </div>
    );
};

export default Movie;