import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons"
function Movie({ name, price, movies, setMovies, id }) {
    const HandlerEvent = (id) => {
        const newMovies = movies.filter((movie) => movie.id != id.id);
        setMovies(newMovies);
    };
    return (
        <div className="mov" key={id}>
            <img style={{ cursor: "pointer" }} src="https://img.icons8.com/ios/100/000000/multiply.png" onClick={() => {
                HandlerEvent({ id });
            }} />
            <div className="cont_mv">
                <h1>{name}</h1>
                <h3>
                    <FontAwesomeIcon icon={faRupeeSign} />
                    {price}
                </h3>
            </div>
        </div>
    );
}

export default Movie;
