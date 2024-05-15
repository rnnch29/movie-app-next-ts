"use client"
import { log } from "console";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { MovieData } from "./interfaces";
import Link from "next/link";
import aot from '../app/assets/aot.gif'
import Image from "next/image";
import MovieList from "./components/MovieList";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const data = [
    'Attack on titan',
    'One Piece',
    'Thor',
    'Star Wars',
    'Marvel',
  ]


  return (
    <main className="">
      <div className="relative text-center">
        <Image src={aot} alt="GIF image" className="w-full opacity-50 max-h-[600px] rounded-3xl" />
        <div className="absolute font-bold text-2xl lg:text-5xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p>ATTACK ON TITAN</p>
          <p>THE FINAL SEASON</p>
          <button className="text-sm p-2 bg-white text-black rounded-xl my-3 flex mx-auto hover:opacity-80"><FaPlay size={10} className="inline mx-1 my-auto" />Watch Now</button>
        </div>
      </div>
      {data.map((item, index) => (
        <MovieList key={index} searchKey={item} />
      ))}
    </main>
  );
}
