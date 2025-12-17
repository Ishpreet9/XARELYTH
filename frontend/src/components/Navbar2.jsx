import React, { useEffect } from 'react'
import { assets } from '../assets/assets';
import { MdHome } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';


const Navbar2 = () => {
      const location = useLocation();

  useEffect(() => {
    console.log(`current location : ${location.pathname}`);
  }, [location]);

    return (
        <div className='flex justify-center items-center gap-[1.5vw]'>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <MdHome className={`text-neutral-200 text-[2.5vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <BsPersonFill className={`text-neutral-200 text-[2.5vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <IoMdSettings className={`text-neutral-200 text-[2.5vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <FaToolbox className={`text-neutral-200 text-[2.2vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <FaScroll className={`text-neutral-200 text-[2.2vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
            <NavLink to={'/'} className={`relative w-[4.5vw] h-[4.35vw] flex justify-center items-center backdrop-blur-lg bg-black/50 hover:bg-orange-300 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-500`}>
                  <FaMedal className={`text-neutral-200 text-[2.2vw] group-hover:text-black leading-none transition-all duration-500`}/>
            </NavLink>
        </div>
    )
}

export default Navbar2;
