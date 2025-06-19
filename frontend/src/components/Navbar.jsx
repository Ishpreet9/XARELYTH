import React from 'react'
import { MdHome } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";



const Navbar = () => {
    return (
        <span className='flex items-center  justify-center bg-blue-400 rounded-lg overflow-hidden -skew-x-7 shadow-[0_0_13px_rgba(0,0,0,0.3)]'>
          <div className='border-l-2 border-y-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <MdHome size={36} color='white' className='skew-x-7' />
          </div>
          <div className='border-l-2 border-y-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <BsPersonFill size={36} color='white' className='skew-x-7' />
          </div>
          <div className='border-l-2 border-y-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <IoMdSettings size={36} color='white' className='skew-x-7' />
          </div>
          <div className='border-l-2 border-y-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <FaToolbox size={36} color='white' className='skew-x-7' />
          </div>
          <div className='border-l-2 border-y-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <FaScroll size={36} color='white' className='skew-x-7' />
          </div>
          <div className='border-2 border-blue-500 hover:bg-blue-500 px-[1vw] py-[0.7vw] cursor-pointer transition-all duration-300'>
              <FaMedal size={36} color='white' className='skew-x-7' />
          </div>
        </span>
    )
}

export default Navbar
