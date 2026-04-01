import React from 'react'
import './WatchMovies.css'
import rating from '../../rating.jfif'

export const WatchMovies = () => {
  return (
    <a href="movie_show" className="movie_show">
      <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg" 
      className="movie-img" alt="Movie Poster" />
        <div className="movie-details">
            <h3 className="movie-details-h3">Sinners</h3>
            <div className="movie-date center-el">
                <p>18-04-2025</p>
                <p>8.0{""} <img className="emoji-class" src={rating} alt="Rating" /></p>
            </div>
            <p className="movie-description">Horror, Action, Drama</p>
        </div>
    </a>
  )
}

