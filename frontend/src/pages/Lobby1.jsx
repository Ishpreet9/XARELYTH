import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Navbar2 from '../components/Navbar2'
import Character from '../components/Character'
import SpecialQuest from '../components/SpecialQuest'

const Lobby1 = () => {

  const [currentLevel, setCurrentLevel] = useState(6);
  const [checked, setChecked] = useState(Array(10).fill(false));
  const [claimed, setClaimed] = useState(Array(10).fill(false));
  const [progress, setProgress] = useState(0);

  return (
    <div className='relative w-screen h-screen opacity-100'>
      <img src={assets.bg_image_1} className='w-full h-full brightness-50' alt="" />
      <div className='flex justify-center items-center absolute w-[100%] h-[100%] z-20 backdrop-blur-xl top-0 left-0'>
        <div className='w-[45%] h-full flex flex-col justify-evenly items-center'>
          <Navbar2 />
          <div className='flex justify-between items-center gap-[1.75vw] w-full justify-start px-[3.9vw]'>
            <div className='h-full flex flex-col justify-evenly items-center'>
              {
                Array(6).fill().map((_, index) => (
                  <span onClick={() => setCurrentLevel(index + 1)} className={`flex relative justify-center items-center w-[3vw] h-[3vw] border-[0.15vw] ${currentLevel === index + 1 ? 'bg-orange-400/30 text-white border-orange-400/10' : 'bg-black/30 border-black/40 text-white/60'} rounded-[0.45vw] text-[1.15vw] font-semibold transition-all duration-500 cursor-pointer`}>{index + 1}
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-l-[0.17vw] border-t-[0.17vw] rounded-tl-[0.45vw] -top-[0.15vw] -left-[0.15vw] border-orange-300 ${currentLevel === index + 1 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-l-[0.17vw] border-b-[0.17vw] rounded-bl-[0.45vw] -bottom-[0.15vw] -left-[0.15vw] border-orange-300 ${currentLevel === index + 1 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-r-[0.17vw] border-b-[0.17vw] rounded-br-[0.45vw] -bottom-[0.15vw] -right-[0.15vw] border-orange-300 ${currentLevel === index + 1 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-r-[0.17vw] border-t-[0.17vw] rounded-tr-[0.45vw] -top-[0.15vw] -right-[0.15vw] border-orange-300 ${currentLevel === index + 1 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                  </span>
                ))
              }
            </div>
            <Character currentLevel={currentLevel} />
            {/* <div className='h-full flex flex-col justify-evenly items-center py-[0.5vw]'>
              {
                Array(3).fill().map((_, index) => (
                  <span onClick={() => setCurrentLevel(index + 4)} className={`flex relative justify-center items-center w-[3vw] h-[3vw] border-[0.15vw] ${currentLevel === index + 4 ? 'bg-orange-400/30 text-white border-orange-400/10' : 'bg-black/30 border-black/40 text-white/60'} rounded-[0.45vw] text-[1.15vw] font-semibold transition-all duration-500 cursor-pointer`}>{index + 4}
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-l-[0.17vw] border-t-[0.17vw] rounded-tl-[0.45vw] -top-[0.15vw] -left-[0.15vw] border-orange-300 ${currentLevel === index + 4 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-l-[0.17vw] border-b-[0.17vw] rounded-bl-[0.45vw] -bottom-[0.15vw] -left-[0.15vw] border-orange-300 ${currentLevel === index + 4 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-r-[0.17vw] border-b-[0.17vw] rounded-br-[0.45vw] -bottom-[0.15vw] -right-[0.15vw] border-orange-300 ${currentLevel === index + 4 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                    <div className={`absolute w-[0.8vw] h-[0.8vw] border-r-[0.17vw] border-t-[0.17vw] rounded-tr-[0.45vw] -top-[0.15vw] -right-[0.15vw] border-orange-300 ${currentLevel === index + 4 ? 'opacity-100' : 'opacity-0 cursor-events-none'} transition-all duration-500`}></div>
                  </span>
                ))
              }
            </div> */}
            <div className='flex flex-col justify-center items-center flex-1 h-full bg-black/20 rounded-[1vw]'>
              <span className='text-[1vw] text-black/80'>STATS</span>
            </div>
          </div>
          <SpecialQuest />
        </div>
        <div className='flex-1 h-full flex justify-center items-center px-[1vw] py-[2vw]'>
          <div className='flex flex-col justify-between items-center w-full h-full py-[1.5vw] bg-black/20 rounded-[0.9vw]'>
            {/* title part */}
            <div className='w-full flex justify-center items-center gap-[1vw]'>
              {
                Array(5).fill().map((_, index) => (
                  <span className={`w-[1.5vw] h-[1.5vw] border-[0.13vw] ${progress > index ? 'border-orange-400 bg-orange-400/20 ' : 'border-black/40 bg-black/20'} rounded-[0.23vw] transition-all duration-300`}></span>
                ))
              }
              <span className='text-white text-[1.7vw] font-mono font-bold px-[0.5vw]'>DAILY TASKS</span>
              {
                Array(5).fill().map((_, index) => (
                  <span className={`w-[1.5vw] h-[1.5vw] border-[0.13vw] ${progress > index+5 ? 'border-orange-400 bg-orange-400/20 ' : 'border-black/40 bg-black/20'} rounded-[0.23vw] transition-all duration-300`}></span>
                ))
              }
            </div>
            {/* tasks part */}
            <div className='flex flex-col justify-start items-center gap-[2vw] w-full flex-1 py-[3vw] px-[3vw] overflow-scroll custom-scroll'>
              {
                checked.map((boolCheck, index) => (
                  <div key={index} className='flex justify-center items-center w-[2vw] py-[0.4vw] bg-black/30 w-full border-[0.15vw] border-black/40 rounded-[0.54vw]'>
                    {/* checkbox */}
                    <div className='w-[4vw] flex justify-center items-center h-full'>
                      <span className={`w-[2.5vw] h-[2.5vw] relative ${claimed[index] ? 'opacity-40 pointer-events-none' : ''} transition-all duration-300`}>
                        <svg onClick={() => setChecked(
                          checked.map((item, idx) => idx === index ? !item : item)
                        )} viewBox="0 0 100 100" className="opacity-80 cursor-pointer">
                          <path
                            d="
      M 30 15
      H 70
      Q 75 15 78 23
      L 90 45
      Q 92 50 90 55
      L 78 77
      Q 75 85 70 85
      H 30
      Q 25 85 22 77
      L 10 55
      Q 8 50 10 45
      L 22 23
      Q 25 15 30 15
      Z
    "
                            fill="#fb923c"
                            fillOpacity='0.15'
                            stroke="#fb923c"
                            strokeWidth="7"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>


                        <span className={`absolute w-[1.7vw] h-[1.7vw] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${boolCheck ? 'opacity-100' : 'opacity-0'} transition-all duration-200 pointer-events-none`}>
                          <svg viewBox="0 0 100 100" className="opacity-80 cursor-pointer">
                            <path
                              d="
      M 30 15
      H 70
      Q 75 15 78 23
      L 90 45
      Q 92 50 90 55
      L 78 77
      Q 75 85 70 85
      H 30
      Q 25 85 22 77
      L 10 55
      Q 8 50 10 45
      L 22 23
      Q 25 15 30 15
      Z
    "
                              fill="#fb923c"
                              stroke=""
                              strokeWidth="7"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            />
                          </svg>

                        </span>
                      </span>
                    </div>
                    {/* task part */}
                    <div className={`flex justify-center items-center text-center ${claimed[index] ? 'line-through select-none text-white/40' : ''} text-white text-[1.1vw] flex-1 h-full transition-all duration-300`}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, veritatis.
                    </div>
                    {/* claim part */}
                    <div className='px-[1vw] h-full flex justify-center items-center'>
                      <button onClick={() => {
                        setClaimed(claimed.map((item, idx) => idx === index ? !item : item));
                        setProgress(progress + 1);
                        console.log(claimed);
                      }} className={`${boolCheck && !claimed[index] ? 'opacity-100 cursor-pointer' : boolCheck && !claimed[index] ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'} bg-orange-400 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-400/50 hover:-translate-y-0.5`}>
                        Claim
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lobby1
