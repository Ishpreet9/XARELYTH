import React from 'react'

const SpecialQuest = () => {
  return (
    <div className='flex justify-between items-center w-[90%] h-[30vh] bg-black/15 border-[0.23vw] rounded-[1vw]'>
      <div className='flex flex-col justify-end items-center w-[70%] h-full'>
        <div className='w-full flex-1 flex flex-col justify-evenly items-center mt-[1.7vw] px-[1.7vw]'>
          <span className='font-mono font-semibold text-[1.4vw] text-white tracking-[0.3vw]'>SPECIAL QUEST</span>
          <span className='text-[1.1vw] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum omnis quia assumenda facere illo.</span>
        </div>
        <svg className='mb-[0.7vw]' width="20vw" height="2vw" viewBox="0 0 600 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block'}}>
          <rect width="100%" height="100%" fill="transparent" />

          <line x1="25" y1="30" x2="575" y2="30" stroke="#f9a93877" strokeWidth="2.5" />

          <g fill="#9f6e29ff">
            <path d="M 300,5 L 325,30 L 300,55 L 275,30 Z" />
            <path d="M 225,15 L 240,30 L 225,45 L 210,30 Z" />
            <path d="M 375,15 L 390,30 L 375,45 L 360,30 Z" />
            <circle cx="180" cy="30" r="5" />
            <circle cx="420" cy="30" r="5" />
            <path d="M 140,18 L 152,30 L 140,42 L 128,30 Z" />
            <path d="M 460,18 L 472,30 L 460,42 L 448,30 Z" />
            <path d="M 25,15 L 40,30 L 25,45 L 10,30 Z" />
            <path d="M 575,15 L 590,30 L 575,45 L 560,30 Z" />
          </g>
        </svg>
      </div>
      <div className='relative flex-1 h-full group cursor-pointer'>
        <div className='absolute w-[2vw] h-[2vw] top-[1vw]'>
          <div className='absolute w-full h-full rotate-[45deg] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full translate-y-[50%] -left-[21%] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full -translate-y-[20%] left-[50%] border-t-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
        </div>
        <div className='absolute w-[2vw] h-[2vw] top-[1vw] right-[1vw] rotate-[90deg]'>
          <div className='absolute w-full h-full rotate-[45deg] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full translate-y-[50%] -left-[21%] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full -translate-y-[20%] left-[50%] border-t-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
        </div>
        <div className='absolute w-[2vw] h-[2vw] bottom-[1vw] right-[1vw] rotate-[180deg]'>
          <div className='absolute w-full h-full rotate-[45deg] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full translate-y-[50%] -left-[21%] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full -translate-y-[20%] left-[50%] border-t-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
        </div>
        <div className='absolute w-[2vw] h-[2vw] bottom-[1vw] rotate-[270deg]'>
          <div className='absolute w-full h-full rotate-[45deg] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full translate-y-[50%] -left-[21%] border-l-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
          <div className='absolute w-full h-full -translate-y-[20%] left-[50%] border-t-[0.23vw] border-orange-400/90 group-hover:border-orange-300 transition-color duration-300'></div>
        </div>
      </div>
    </div>
  )
}

export default SpecialQuest
