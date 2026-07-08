import React, { useEffect, useState } from 'react'
import './Movies.css'
import { WatchMovies } from './WatchMovies'
import FilterMovies from './FilterMovies'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [chsRating, setRating] = useState(0)
  const [moviesFiltered, setMoviesFiltered] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [sortOrder, setSortOrder] = useState([])

  useEffect(() => {
    fetchmovies();
  }, [])

  const fetchmovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    const data = await res.json()
    setMovies(data.results)
    setMoviesFiltered(data.results)
  }

  const handleFilter = (rating) => {
    if (rating === chsRating) {
      setRating(0)
      setMovies(moviesFiltered)
    } else {
      setRating(rating)
      const filteredMovies = moviesFiltered.filter(movie => movie.vote_average >= rating)
      setMovies(filteredMovies)
    }
  }

  return (
    <section className="movies-section">
      <header className="movies-header">
        <h2 className='movie-h2ead center-el'>Popular</h2>
        <div className="movie-list-add center-el">
            <ul className="movie_filter center-el">
                <li className={chsRating === 8 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={()=>handleFilter(8)}>8+</li>
                <li className={chsRating === 7 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={()=>handleFilter(7)}>7+</li>
                <li className={chsRating === 6 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={()=>handleFilter(6)}>6+</li>
            </ul>
            {/* <FilterMovies chsRating={chsRating} handleFilter={handleFilter} ratings={[8, 7, 6]} /> */}
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

      <div className="movie-shows">
        {movies.length > 0 ? movies.map(movie => (
          <WatchMovies key={movie.id} movie={movie} />
        )) : <p className='none-found center-el'>No movies found.</p>}
      </div>
    </section>
  )
}

export default Movies
