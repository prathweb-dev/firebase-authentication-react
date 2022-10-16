import React, { useState, useContext } from "react";
import { MovieContext } from "./contexts/MovieContext";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function AddMovie() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = (e) => {
        e.preventDefault();
        setMovies((preMovies) => [
            ...preMovies,
            { name: name, price: price, id: uuidv4() }
        ]);
        setName("");
        setPrice("");
    };

    return (
        <div className="containor">
            <form onSubmit={addMovie} className="form">
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Movie Name"
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        value={price}
                        onChange={updatePrice}
                        placeholder="Price"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddMovie;
