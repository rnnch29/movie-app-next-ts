import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto p-5 mt-10 flex flex-col gap-5'>
      <ul className="flex gap-5 justify-center items-center text-2xl">
        <li><a href=""><FaFacebook /></a></li>
        <li><a href=""><FaYoutube /></a></li>
        <li><a href=""><FaInstagram /></a></li>
        <li><a href=""><BsTwitterX /></a></li>
      </ul>
      <div className="text-center text-sm text-[#808080]">
      &copy; 2024 All rights reserved.
      </div>
    </footer>
  )
}

export default Footer