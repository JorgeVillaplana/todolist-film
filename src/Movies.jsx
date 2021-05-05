import React, {Fragment, useState, useRef} from 'react';
import AddMovie from './AddMovie'

export default function Movies(){

    const [movies, setMovies] = useState([
        {id: 1, name: 'Avatar', viewed: false},
        {id: 2, name: 'Mad Max', viewed: false}
      ]);
    
      const addMovie = (movieName) => {
        let newMovieID;
        movies.length > 0 ? newMovieID = movies[movies.length-1].id+1 : newMovieID = 1
        
        const newMovie = {
          id: newMovieID,
          name: movieName,
          viewed: false
        };
    
        setMovies((prevMovie) => [...prevMovie, newMovie]);
      }
    
      const toggleMovie = (id) => {
        setMovies(movies.map(movie => {
    
          if (movie.id === id) {movie.viewed = !movie.viewed}
    
          return movie;
    
        }));
      }
    
      const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id))
      }

    return (
        <Fragment>
        <AddMovie addNewMovie={addMovie}/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pelicula</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) =>(
          <tr key={movie.id}>
            <th scope="row">{movie.id}</th>
            <td>{movie.name} <span>{movie.viewed ? '✅' : ''}</span></td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success" onClick={() => toggleMovie(movie.id)}>{movie.viewed ? 'No la vi' : 'La he visto'}</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>Eliminar</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
    )
}