"use client"
import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const [scroll, setScroll] = useState<boolean>(false)

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const active = 'bg-[#141414]'

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scroll])

    return (
        <nav className={`sticky w-full top-0  z-10 transition duration-1000 bg-gradient-to-b from-black to-transparent ${scroll ? active : ''}`}>
            <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
                <Link href='/'><h1 className='text-[#fff] px-2 py-1 text-2xl font-bold bg-[#e50914] rounded-xl'>NEXTMOVIES</h1></Link>
                <div>
                    <FaUserCircle className='text-3xl' />
                </div>
            </div>

        </nav>
    )
}

export default Navbar