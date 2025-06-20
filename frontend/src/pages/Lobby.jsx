import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

const Lobby = () => {
  return (
    <div className='flex flex-col items-start p-[1vw] w-screen h-screen bg-neutral-100'>
      {/* left part  */}
      <div className='flex flex-col items-start gap-[2vw] p-[1vw]'>
        {/* navbar and rank */}
        <div className='flex gap-[2vw]'>
          <Navbar />
          <div className='flex justify-center p-[0.2vw] bg-green-400 -skew-x-7 rounded-lg bg-gradient-to-br from-green-500 to-blue-400 shadow-[0_0_13px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='relative w-full h-full flex justify-center items-center p-[0.3vw] rounded-lg bg-neutral-100'>
                  <div className='absolute bg-neutral-100 z-30 left-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] top-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] bottom-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='bg-green-400 w-full h-full bg-gradient-to-br from-green-500 to-blue-400 rounded-[0.4vw] p-[0.1vw] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex justify-center items-center bg-neutral-100 px-[0.6vw] rounded-[0.4vw]'>
                  <span className='text-[1.47vw] text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-400 font-bold font-mono leading-none italic'>Rank: A</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center p-[0.2vw] bg-green-400 -skew-x-7 rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 shadow-[0_0_13px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='relative w-full h-full flex justify-center items-center p-[0.3vw] rounded-lg bg-neutral-100'>
                  <div className='absolute bg-neutral-100 z-30 left-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] top-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] bottom-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='bg-green-400 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-[0.4vw] p-[0.1vw] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex justify-center items-center bg-neutral-100 px-[0.6vw] rounded-[0.4vw]'>
                  <span className='text-[1.47vw] text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400 font-bold font-mono leading-none italic'>Rank: S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* character */}
        <div className='relative flex gap-[1vw] shadow-[0_0_13px_rgba(0,0,0,0.3)] rounded-xl p-[0.3vw] overflow-hidden'>
          <img src={assets.clouds_bg} alt="" className='absolute opacity-50 inset-0 w-full h-full' />
          <div className='relative z-10 w-[17vw] h-[25.4vw] overflow-hidden rounded-[0.7vw]'>
            <img src={assets.obscerion_l3} alt="" className='' />
          </div>
          {/* moving through different chracter levels */}
          <div className='flex flex-col py-[0.3vw] justify-start relative z-10 h-full w-[2.5vw] gap-[1.2vw] select-none'>
            <span className='flex justify-center items-center text-[1.1vw] text-blue-500 font-semibold w-full h-[2.5vw] bg-blue-400/20 border-2 border-blue-500 rounded-lg cursor-pointer'>1</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>2</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>3</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>4</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>5</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>6</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-500 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>7</span>
          </div>
          {/* character info & stats */}
          <div className='relative z-10 flex flex-col p-[0.7vw] gap-[0.7vw] rounded-[0.7vw]'>
            <h1 className='font-mono text-[2vw] font-bold'>OBSCERION</h1>
            <span className='text-[1vw] font-semibold'>Class: Shadowbound</span>
            {/* stats useful during game or one with a limit */}
            <div className='flex flex-col py-[1vw]'>
              {/* vitality */}
              <div className='flex justify-center items-center gap-[0.3vw]'>
                <span className='text-xl font-bold mb-[0.34vw] min-w-[4vw]'>VTL</span>
                <div className='w-[13vw] h-[1vw] bg-orange-400'></div>
                <span className='text-xl font-semibold mb-[0.34vw]'>100</span>
              </div>
              {/* hp */}
              <div className='flex justify-center items-center gap-[0.3vw]'>
                <span className='text-xl font-bold mb-[0.34vw] min-w-[4vw]'>HP</span>
                <div className='w-[13vw] h-[1vw] bg-green-400'></div>
                <span className='text-xl font-semibold mb-[0.34vw]'>100</span>
              </div>
              {/* mp */}
              <div className='flex justify-center items-center gap-[0.3vw]'>
                <span className='text-xl font-bold mb-[0.34vw] min-w-[4vw]'>MANA</span>
                <div className='w-[13vw] h-[1vw] bg-blue-400'></div>
                <span className='text-xl font-semibold mb-[0.34vw]'>100</span>
              </div>
              {/* luck */}
              <div className='flex justify-center items-center gap-[0.3vw]'>
                <span className='text-xl font-bold mb-[0.34vw] min-w-[4vw]'>LUCK</span>
                <div className='w-[13vw] h-[1vw] bg-yellow-400'></div>
                <span className='text-xl font-semibold mb-[0.34vw]'>100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lobby
