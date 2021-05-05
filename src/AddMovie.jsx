import React, { Fragment, useRef } from 'react';
import AddMovie from './AddMovie';

export default function AddMovies({addNewMovie}){
    const inputMovie = useRef();

    const addMovie = (e) => {
        const myMovie = inputMovie.current.value;
        addNewMovie(myMovie);
        inputMovie.current.value = null;
    };
    
    const keypress = (event)=> {
        if(event.key === "Enter"){
            addMovie();
        }
    };

    return (
            <div className="input-group mt-3">
                <input ref={inputMovie} type="text" className="form-control" placeholder="Nueva peli" onKeyPress={keypress}/>
                <button onClick={addMovie} className="btn btn-outline-secondary" type="button">
                    Añadir peli
                </button>
            </div>
    );
}