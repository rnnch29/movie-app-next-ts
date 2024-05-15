import React, { FC } from 'react'
import { MovieData } from '../interfaces'

interface CardProps {
    movie: MovieData
}
const Card: FC<CardProps> = ({ movie }) => {
    return (
        <div className='relative rounded overflow-hidden group  cursor-pointer  w-[150px] h-[250px] lg:w-[220px] lg:h-[320px]'>
            <img src={movie.Poster} alt={movie.Poster} className='object-cover h-full group-hover:scale-110 transition duration-300 ease-in-out' />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-70 z-10">
                <p className="text-center text-xl font-bold p-5">{movie.Title}</p>
            </div>
        </div>
    )
}

export default Card