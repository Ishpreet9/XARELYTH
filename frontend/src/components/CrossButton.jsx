import React, { useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { assets } from '../assets/assets';

const CrossButton = () => {

  const audioRef = useRef(new Audio(assets.cancel_sound_effect));

  const playSound = () => {
    audioRef.current.volume = 0.9;
    audioRef.current.currentTime = 0; //rewind before start
    audioRef.current.play();

    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Prep for next click
    }, 1000); // Pause after 1 second (1000ms)
  }

  return (
    <button onClick={()=>playSound()}
      class="relative border-2 border-neutral-400 group hover:border-red-400 w-12 h-12 duration-500 overflow-hidden cursor-pointer group rounded-lg"
      type="button"
    >
      <p
        class="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0"
      >
        <RxCross2 size={20} color='black' className='mt-[0.1vw] opacity-40' />
      </p>
      <span
        class="absolute w-full h-full bg-neutral-400 group-hover:bg-red-400 rotate-45 group-hover:top-9 duration-500 top-12 left-0"
      ></span>
      <span
        class="absolute w-full h-full bg-neutral-400 group-hover:bg-red-400 rotate-45 top-0 group-hover:left-9 duration-500 left-12"
      ></span>
      <span
        class="absolute w-full h-full bg-neutral-400 group-hover:bg-red-400 rotate-45 top-0 group-hover:right-9 duration-500 right-12"
      ></span>
      <span
        class="absolute w-full h-full bg-neutral-400 group-hover:bg-red-400 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
      ></span>
    </button>

  )
}

export default CrossButton
