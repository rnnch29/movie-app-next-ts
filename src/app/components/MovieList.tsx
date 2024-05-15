"use client"
import React, { useEffect, useState, FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Card from './Card';
import { MovieData } from "../interfaces";
import Link from 'next/link';
import ReactLoading from 'react-loading';

interface movieListProps {
    searchKey: string;
}

const MovieList: FC<movieListProps> = ({ searchKey }) => {

    const baseURL = 'https://www.omdbapi.com/'
    const apiKey = '3dc42e95';
    const [movies, setMovies] = useState<MovieData[]>([])
    const [loading, setLoading] = useState<boolean>(true)


    const fetchMovies = async () => {
        const res = await fetch(`${baseURL}?apiKey=${apiKey}&s="${searchKey}"`)
        const jsonData = await res.json()
        setMovies(jsonData.Search) 
        setLoading(false)
    }
    useEffect(() => {
        fetchMovies();
    }, [])


    return (
        <>
            <div className="relative text-xl font-bold pb-1 mt-10 mb-5">
                <p className="pl-5">{searchKey} </p>
                <div className="absolute bottom-0 left-0 bg-[#e50914] h-full w-[5px] "></div>
            </div>

            {loading ? (
                <div className='flex items-center justify-center p-10'>
                <ReactLoading type='balls' />
                </div>
            ) : (
                <>
                    <Swiper
                        cssMode={true}
                        slidesPerView={5}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        spaceBetween={0}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,

                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`movie/${movie.imdbID}`} key={index} ><Card movie={movie} /></Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}

        </>
    )
}

export default MovieList