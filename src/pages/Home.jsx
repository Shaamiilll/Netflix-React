import React from 'react'
import Banner from '../components/home/Banner'
import MovieRow from '../components/home/MovieRow'
import endpoints from '../services/movieService'
const Home = () => {
  return (
    <>
    <Banner/>
    <MovieRow title="Upcoming" url={endpoints.upcoming}/>
    <MovieRow title="Trending" url={endpoints.trending}/>
    <MovieRow title="Top-Rated" url={endpoints.topRated}/>
    <MovieRow title="comedy" url={endpoints.comedy}/>
    <MovieRow title="Popular" url={endpoints.popular}/>
    </>
  )
}

export default Home
