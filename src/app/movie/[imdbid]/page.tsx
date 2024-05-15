"use client"
import React, { useEffect, useState } from 'react'
import { MovieData } from '@/app/interfaces'
import Link from 'next/link'
import ReactLoading from 'react-loading'
import type { Metadata } from "next";



const movie = ({ params }: { params: { imdbid: string } }) => {

  const baseURL = 'https://www.omdbapi.com/'
  const apiKey = '3dc42e95';
  const [data, setData] = useState<MovieData>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMovies = async () => {
    const res = await fetch(`${baseURL}?apiKey=${apiKey}&i=${params.imdbid}&plot=full`)
    const jsonData = await res.json()
    setData(jsonData)
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  document.title = `${data?.Title}`

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <ReactLoading type='balls' />
        </div>
      ) : (
        <>
          <div className="flex gap-3 mb-10">
            <Link href='/' className='hover:underline'>Home</Link>
            <p className='text-[#e50914]'>|</p>
            <p className='text-[#808080] truncate'>{data?.Title}</p>
          </div>
          <div className='grid grid-rows gap-5 lg:grid-cols-2 lg:gap-0'>
            <div className="flex justify-center">
              <img src={data?.Poster} alt="" />
            </div>
            <div className="flex flex-col gap-5 text-center lg:text-start">
              <p className='text-2xl font-bold text-yellow-600 '>{data?.Title}</p>
              <p className='text-[#b3b3b3]'>{data?.Plot}</p>
              <p className='text-sm text-[#b3b3b3] font-bold'>Released : {data?.Released}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default movie