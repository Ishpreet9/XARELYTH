import React, { useRef } from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'

const BlueButton = ({text, redirectionLink, setButtonHover}) => {
    
    const audioRef = useRef(new Audio(assets.clickSoundEffect2));

    const playSound = () => {
        audioRef.current.volume = 0.3;
        audioRef.current.currentTime = 0.09; //rewind before start
        audioRef.current.play();

        setTimeout(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0; // Prep for next click
        }, 1000); // Pause after 1 second (1000ms)
    }

  return (
    <NavLink onMouseEnter={()=>setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)} onClick={playSound} to={redirectionLink} className='relative border-2 border-black p-[0.65vw] group cursor-pointer'>
      <button className='min-w-[13.8vw] relative border-2 border-black px-[2vw] py-[0.45vw] font-bold text-[2vw] bg-neutral-100 group-hover:bg-blue-400 group-hover:text-white transition-all cursor-pointer duration-500'>
        {text}
        <div className='absolute top-0 left-0 z-10 w-[1.2vw] h-[1.2vw] bg-blue-400 group-hover:bg-neutral-100 transition-all duration-500'></div>
        <div className='absolute bottom-0 right-0 z-10 w-[1.2vw] h-[1.2vw] bg-blue-400 group-hover:bg-neutral-100 transition-all duration-500'></div>
      </button>
      <div className='absolute bg-neutral-100 w-[2vw] h-[1vw] group-hover:w-[4.3vw] transition-all duration-500 -top-[0.6vw] left-[50%] -translate-x-1/2'></div>
      <div className='absolute bg-neutral-100 w-[2vw] h-[1vw] group-hover:w-[4.3vw] transition-all duration-500 -bottom-[0.6vw] left-[50%] -translate-x-1/2'></div>
      <div className='absolute bg-neutral-100 h-[2vw] w-[1vw] group-hover:h-[3.4vw] transition-all duration-500 -left-[0.6vw] top-[50%] -translate-y-1/2'></div>
      <div className='absolute bg-neutral-100 h-[2vw] w-[1vw] group-hover:h-[3.4vw] transition-all duration-500 -right-[0.6vw] top-[50%] -translate-y-1/2'></div>
    </NavLink>
  )
}

export default BlueButton
