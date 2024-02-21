import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../../services/movieService'

const Banner = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get(endpoints.popular)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const truncate =(str , length)=>{
    if(!str) return '';
    return str.length > length ? str.slice(0 , length) + '...' : str
  }


  if (!movie) {
    return (
      <>
        <p>Fetching the movies</p>
      </>
    );
  }
const {title , backdrop_path , release_date , overview} = movie
  return (
    <div className='w-full h-[550px] lg:h-[600px]'>
      <div className='w-full h-full'>
          <div className=' absolute w-full h-[550px] lg:h-[600px] bg-gradient-to-r from-black'/>
            <img className='w-full h-full object-cover object-top' src={createImageUrl(backdrop_path , "original")} alt={title} />

            <div className='absolute w-full top-[30%] lg:top[25%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-nsans-bold'>{title}</h1>
              <div className='mt-8 mb-4'>
                <button className='capitalize  bg-gray-100 border-grey-300 bg-opacity-40 py-2 px-5 rounded'>Play</button>
                <button className='capitalize  bg-zinc-900 border-grey-300 bg-opacity-95 py-2 px-5 rounded ml-3'>Watch Later</button>
              </div>
              <p>{release_date}</p>
              <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[50%] text-gray-200 '>{truncate(overview ,250)}</p>
            </div>
      </div>
    </div>
  );
}

export default Banner;
