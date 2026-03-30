import React from 'react'
import './Movies.css'

const Movies = () => {
  return (
    <section className="movies-section">
      <header className="movies-header">
        <h2 className='movie-h2ead center-el'>Popular</h2>
        <div className="movie-list-add center-el">
            <ul className="movie_filter center-el">
                <li className="movie_filter_item">8+</li>
                <li className="movie_filter_item">7+</li>
                <li className="movie_filter_item">6+</li>
            </ul>
            <select className="movie_sorting">
                <option value="">Sort By</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="release_date">Release Date</option>
            </select>
            <select name="" id="" className="movie_sorting">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
        </div>
      </header>
    </section>
  )
}

export default Movies
