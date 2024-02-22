import React, { useState } from 'react';
import { createImageUrl } from '../../services/movieService';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoPlayCircle } from "react-icons/io5";

const truncate =(str , length)=>{
    if(!str) return '';
    return str.length > length ? str.slice(0 , length) + '...' : str
  }
const MovieCard = ({ movie }) => {
    const { title, backdrop_path, poster_path,overview } = movie;
    const [like, setLike] = useState(false)
    return (
        <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
            <img className='w-full h-40 block object-cover object-top'
                src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
            <div className='absolute top-0 left-0 w-full h-40  bg-black/80 opacity-0 hover:opacity-85'>
                <p className='flex items-center whitespace-normal text-xs md:text-sm justify-center h-14 font-nsans-bold '>
                    {title}</p>
                    <p className='flex items-center whitespace-normal text-xs md:text-sm justify-center h-full font-nsans-bold' >
                    {truncate(overview ,50)}</p>
                    
                <p>{like ? <FaHeart size={20} className='absolute top-2 left-2 tex-grey-200' /> : <FaRegHeart size={20} className='absolute top-2 left-2 tex-grey-200' />}</p>
            </div>
        </div>
    );
};

export default MovieCard;
