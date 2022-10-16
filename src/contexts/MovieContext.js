import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "250",
            id: uuidv4()
        },
        {
            name: "Thor",
            price: "300",
            id: uuidv4()
        },
        {
            name: "Inception",
            price: "500",
            id: uuidv4()
        },
        {
            name: "Spider Man",
            price: "750",
            id: uuidv4()
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
