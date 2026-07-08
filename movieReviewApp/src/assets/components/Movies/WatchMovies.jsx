import React from 'react'
import './WatchMovies.css'
import PropTypes from 'prop-types'
import rating from '../../rating.jfif'

export const WatchMovies = ({ movie }) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='blank' className="movie_show">
      <img src={movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`  
      : 'https://media.istockphoto.com/id/1415203156/vector/error-page-page-not-found-vector-icon-in-line-style-design-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=RuQ_sn-RjAVNKOmARuSf1oXFkVn3OMKeqO5vw8GYoS8='}
      className="movie-img" alt="Movie Poster" />
        <div className="movie-details">
            <h3 className="movie-details-h3">{movie.title}</h3>
            <div className="movie-date center-el">
                <p>{movie.release_date}</p>
                <p className="rating">{movie.vote_average.toFixed(1)} <img className="emoji-class" src={rating} alt="Rating" /></p>
            </div>
            <p className="movie-description">{movie.overview.slice(0, 100)}...</p>
        </div>
    </a>
  )
}

WatchMovies.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string
    }).isRequired
};

