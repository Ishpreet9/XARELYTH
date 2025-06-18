import React, { useRef, useState } from 'react'
import { assets } from '../assets/assets'
import SelectionBox from '../components/SelectionBox'

const SelectCharacter = () => {

  const [selectionBoxVisible, setSelectionBoxVisible] = useState(false);

  const audioRef = useRef(new Audio(assets.clickSoundEffect2));

  const playSound = () => {
    audioRef.current.volume = 0.2;
    audioRef.current.currentTime = 0; //rewind before start
    audioRef.current.play();

    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Prep for next click
    }, 1000); // Pause after 1 second (1000ms)
  }

  return (
    <div className='grid grid-cols-5 gap-[2vw] p-[2vw] h-screen w-screen overflow-scroll custom-scroll'>
      <SelectionBox selectionBoxVisible={selectionBoxVisible} setSelectionBoxVisible={setSelectionBoxVisible} />
      <div onClick={() => {
        setSelectionBoxVisible(true);
        playSound();
        }} className='bg-neutral-200 border-[0.2vw] border-neutral-100 hover:border-neutral-700 rounded-xl h-[24.3vw] transition-color duration-500 cursor-pointer overflow-hidden'>
        <img src={assets.obscerion_l1} alt="" className='w-full h-full' />
      </div>
      <div onClick={() => {
        setSelectionBoxVisible(true);
        playSound();
        }} className='bg-neutral-200 border-[0.2vw] border-neutral-100 hover:border-neutral-700 rounded-xl h-[24.3vw] transition-color duration-500 cursor-pointer overflow-hidden'>
        <img src={assets.thornexus_l1} alt="" className='w-full h-full' />
      </div>
      <div onClick={() => {
        setSelectionBoxVisible(true);
        playSound();
        }} className='bg-neutral-200 border-[0.2vw] border-neutral-100 hover:border-neutral-700 rounded-xl h-[24.3vw] transition-color duration-500 cursor-pointer overflow-hidden'>
        <img src={assets.kaigen_l1} alt="" className='w-full h-full' />
      </div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
      <div className='bg-neutral-200 border-[0.2vw] border-neutral-100 rounded-xl h-[24.3vw] cursor-pointer'></div>
    </div>
  )
}

export default SelectCharacter
