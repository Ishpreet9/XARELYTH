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
        <div className='flex justify-center items-center gap-[1vw]'>
            <NavLink to={'/'} className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <MdHome size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </NavLink>
            <NavLink to={'/login'} className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <BsPersonFill size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </NavLink>
            <div className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <IoMdSettings size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </div>
            <div className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <FaToolbox size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </div>
            <div className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <FaScroll size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </div>
            <div className={`relative w-24 h-24 bg-neutral-400/70 hover:bg-blue-400 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] group cursor-pointer transition-all duration-300`}>
                <div className="absolute flex justify-center items-center overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-21 h-21 bg-neutral-100 [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]">
                  <FaMedal size={52} className={`text-neutral-400 group-hover:text-blue-400 leading-none transition-all duration-300`}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar2;
