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
    <NavLink onMouseEnter={()=>setButtonHover(true)} onMouseLeave={()=>setButtonHover(false)} onClick={playSound} to={redirectionLink} className='relative p-[0.65vw] group cursor-pointer'>
      <button className='min-w-[13.8vw] relative border-2 border-blue-400 px-[2vw] py-[0.45vw] font-bold text-[2vw] text-white bg-black/50 group-hover:bg-blue-500/30 group-hover:text-white transition-all cursor-pointer duration-500'>
        {text}
        <div className='absolute top-0 left-0 z-10 w-[1.2vw] h-[1.2vw] bg-blue-400 group-hover:bg-blue-400 group-hover:scale-60 transition-all duration-500'></div>
        <div className='absolute bottom-0 right-0 z-10 w-[1.2vw] h-[1.2vw] bg-blue-400 group-hover:bg-blue-400 group-hover:scale-60 transition-all duration-500'></div>
      </button>
      <div className='absolute bg-transparent border-l-[0.2vw] border-t-[0.2vw] border-black/50 w-[5.5vw] h-[2vw] group-hover:w-[3.5vw] group-hover:h-[1.5vw] transition-all duration-500 -top-0 left-0'></div>
      <div className='absolute bg-transparent border-l-[0.2vw] border-b-[0.2vw] border-black/50 w-[5.5vw] h-[2vw] group-hover:w-[3.5vw] group-hover:h-[1.5vw] transition-all duration-500 -bottom-0 left-0'></div>
      <div className='absolute bg-transparent border-r-[0.2vw] border-t-[0.2vw] border-black/50 h-[2vw] w-[5.5vw] group-hover:h-[1.5vw] group-hover:w-[3.5vw] transition-all duration-500 -right-0 top-0'></div>
      <div className='absolute bg-transparent border-r-[0.2vw] border-b-[0.2vw] border-black/50 h-[2vw] w-[5.5vw] group-hover:h-[1.5vw] group-hover:w-[3.5vw] transition-all duration-500 -right-0 bottom-0'></div>
    </NavLink>
  )
}

export default BlueButton
