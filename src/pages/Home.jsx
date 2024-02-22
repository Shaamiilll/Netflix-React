import React from 'react'
import Banner from '../components/home/Banner'
import MovieRow from '../components/home/MovieRow'
import endpoints from '../services/movieService'
const Home = () => {
  return (
    <>
    <Banner/>
    <MovieRow title="Upcoming Movies" url={endpoints.upcoming}/>
    <MovieRow title="Trending Movies" url={endpoints.trending}/>
    <MovieRow title="Top-Rated Movies" url={endpoints.topRated}/>
    <MovieRow title="comedy Movies" url={endpoints.comedy}/>
    <MovieRow title="Popula Moviesr" url={endpoints.popular}/>
    </>
  )
}

export default Home
