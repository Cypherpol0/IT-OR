import React from 'react'

const FilterMovies = ({ chsRating, handleFilter, ratings }) => {
  return (
    <ul className="movie_filter center-el">
        {ratings.map(rating => (
          <li className={chsRating === rating ? 'movie_filter_item active' : 'movie_filter_item'} onClick={()=>handleFilter(rating)} key={rating}>
            {rating}+
          </li>
        ))}
    </ul>
  )
}

export default FilterMovies
