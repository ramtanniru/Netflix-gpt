import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>Browse</div>
  )
}

export default Browse