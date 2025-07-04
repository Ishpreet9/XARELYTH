import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import { FiPlus } from "react-icons/fi";
import { VscTriangleRight } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

const Lobby = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex flex-row items-start p-[1vw] w-screen h-screen bg-neutral-100'>
      {/* left part  */}
      <div className='flex flex-col items-start gap-[2vw] p-[1vw] h-full'>
        {/* navbar and rank */}
        <div className='flex gap-[1.6vw]'>
          <Navbar />
          {/* <div className='flex justify-center p-[0.2vw] bg-green-400 -skew-x-7 bg-gradient-to-br from-green-500 to-blue-400 shadow-[0_0_13px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='relative w-full h-full flex justify-center items-center p-[0.3vw] bg-neutral-100'>
                  <div className='absolute bg-neutral-100 z-30 left-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] top-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
                  <div className='absolute bg-neutral-100 z-30 right-[0.9vw] bottom-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='bg-green-400 w-full h-full bg-gradient-to-br from-green-500 to-blue-400 p-[0.1vw] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex justify-center items-center bg-neutral-100 px-[0.6vw]'>
                  <span className='text-[1.47vw] text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-400 font-bold font-mono leading-none italic'>Rank: A</span>
                </div>
              </div>
            </div>
          </div> */}
          <div className='flex justify-center p-[0.2vw] bg-green-400 -skew-x-7 bg-gradient-to-br from-purple-400 to-blue-400 shadow-[0_0_13px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='relative w-full h-full flex justify-center items-center p-[0.3vw] bg-neutral-100'>
              <div className='absolute bg-neutral-100 z-30 left-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
              <div className='absolute bg-neutral-100 z-30 right-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
              <div className='absolute bg-neutral-100 z-30 right-[0.9vw] top-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='absolute bg-neutral-100 z-30 right-[0.9vw] bottom-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='bg-green-400 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 p-[0.1vw] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex justify-center items-center bg-neutral-100 px-[0.6vw]'>
                  <span className='text-[1.47vw] text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400 font-bold font-mono leading-none italic'>Rank: S</span>
                </div>
              </div>
            </div>
          </div>
          {/* start match button */}
          <NavLink to={'/play'} className='relative bg-blue-400 px-[0.5vw] py-[0.5vw] cursor-pointer group border-2 border-blue-500 shadow-[0_0_13px_rgba(0,0,0,0.3)]'>
            {/* corner shapes */}
            <div className='absolute z-10 group-hover:-rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 left-[0.21vw] top-[0.21vw] border-2 border-neutral-100 transition-all duration-500'></div>
            <div className='absolute z-10 group-hover:rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 right-[0.21vw] top-[0.21vw] border-2 border-neutral-100 transition-all duration-500'></div>
            <div className='absolute z-10 group-hover:-rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 left-[0.21vw] bottom-[0.21vw] border-2 border-neutral-100 transition-all duration-500'></div>
            <div className='absolute z-10 group-hover:rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 right-[0.21vw] bottom-[0.21vw] border-2 border-neutral-100 transition-all duration-500'></div>
            {/* masking  */}
            <div className='absolute w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 right-[0.21vw] bottom-[0.21vw] transition-all duration-500'></div>
            <div className='absolute w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 left-[0.21vw] bottom-[0.21vw] transition-all duration-500'></div>
            <div className='absolute w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 right-[0.21vw] top-[0.21vw] transition-all duration-500'></div>
            <div className='absolute w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 left-[0.21vw] top-[0.21vw] transition-all duration-500'></div>
            <div className=' flex justify-center items-center text-[1.2vw] text-neutral-100 font-bold font-mono border-2 border-neutral-100 w-full h-full px-[1.3vw]'>
              <span className='leading-none'>MATCH</span>
            </div>
          </NavLink>
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
        {/* special quests */}
        <div className='flex flex-col justify-between items-center w-full flex-1 p-[1vw] bg-neutral-100 rounded-[0.7vw] shadow-[0_0_13px_rgba(0,0,0,0.3)]'>
          {/* quest name part */}
          <div className='relative flex justify-center items-center w-full'>
            {/* main div and text part */}
            <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 flex-1 h-full'></div>
            <span className='px-[1.7vw] bg-neutral-100 leading-none text-[1.5vw] font-semibold font-mono tracking-[0.25vw]'>QUEST NAME</span>
            <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 flex-1 h-full'></div>
            {/* left divs */}
            <div className='absolute flex flex-col gap-[0.85vw] w-[1.6vw] left-0 top-[150%]'>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
            </div>
            {/* right divs */}
            <div className='absolute flex flex-col gap-[0.85vw] w-[1.6vw] right-0 top-[150%]'>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
              <div className='bg-neutral-300 opacity-50 border-2 border-neutral-400 w-full h-[1.6vw]'></div>
            </div>
          </div>
          {/* quest description */}
          <div className='w-[34vw] text-[1.05vw]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor nam fugiat ad possimus. Voluptate asperiores aliquid deleniti ab fugiat.
          </div>
          {/* claim rewards button */}
          <button className='relative border-2 px-[1.2vw] py-[0.5vw] text-[1vw] font-bold cursor-pointer group overflow-hidden'>
              <div class="absolute z-10 top-[0.25vw] left-[0.25vw] group-hover:rotate-180 w-0 h-0 border-t-[13px] border-t-violet-500 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute z-10 top-[0.25vw] right-[0.25vw] group-hover:-rotate-90 rotate-90 w-0 h-0 border-t-[13px] border-t-violet-500 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute z-10 bottom-[0.25vw] left-[0.25vw] group-hover:-rotate-270 -rotate-90 w-0 h-0 border-t-[13px] border-t-violet-500 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute z-10 bottom-[0.25vw] right-[0.25vw] group-hover:rotate-0 -rotate-180 w-0 h-0 border-t-[13px] border-t-violet-500 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div className='absolute w-0 opacity-20 group-hover:opacity-100 group-hover:w-[9vw] h-0 group-hover:h-[7vh] bg-violet-400 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] transition-all duration-1000'></div>
            <span className='relative z-20 text-black group-hover:text-neutral-100 transition-color duration-500'>COMPLETE</span>
          </button>
          {/* <button className='border-2 px-[0.3vw] py-[0.3vw] text-[1vw] font-bold cursor-pointer group'>
            <div className='relative bg-neutral- px-[0.9vw] py-[0.4vw] overflow-hidden'>
              <VscTriangleRight className='absolute group-hover:scale-[30] rotate-225 group-hover:rotate-405 text-purple-400 -top-[0.3vw] -left-[0.3vw] transition-all duration-1000'/>
              <VscTriangleRight className='absolute group-hover:scale-[30] -rotate-45 group-hover:-rotate-225 text-purple-400 -top-[0.3vw] -right-[0.3vw] transition-all duration-1000'/>
              <VscTriangleRight className='absolute group-hover:scale-[30] rotate-135 group-hover:-rotate-45 text-purple-400 -bottom-[0.3vw] -left-[0.3vw] transition-all duration-1000'/>
              <VscTriangleRight className='absolute group-hover:scale-[30] rotate-45 group-hover:rotate-225 text-purple-400 -bottom-[0.3vw] -right-[0.3vw] transition-all duration-1000'/>
              <span className='relative z-20 text-black group-hover:text-neutral-100 transition-color duration-500'>COMPLETE</span>
            </div>
          </button> */}
        </div>
      </div>
      {/* right part */}
      <div className='h-full flex-1 w-full p-[1vw]'>
        <div className='flex flex-col justify-between bg-neutural-100 w-full h-full rounded-[0.7vw] shadow-[0_0_13px_rgba(0,0,0,0.3)] p-[1vw]'>
          {/* title and tasks part */}
          <div className='flex flex-col h-[78%] justify-center items-center w-full gap-[2vw]'>
            {/* title part */}
            <div className='relative w-[25vw]'>
              <img src={assets.text_bg} alt="" className='w-full h-full opacity-60' />
              <span className='absolute inset-0 tracking-[0.6vw] flex justify-start ml-[3vw] leading-none top-[0.17vw] items-center text-neutral-100 font-semibold text-[1.15vw] font-mono'>DAILY TASKS</span>
            </div>
            {/* tasks */}
            <div className='flex flex-col w-full gap-[3vw] overflow-scroll custom-scroll h-[80%]'>
              {/* replace with array in future */}
              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>


              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                {/* bullet point */}
                <div className='flex items-center'>
                  <img src={assets.triangle} alt="" className='w-[2vw] rotate-90' />
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] items-center leading-none flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* toggle */}
                  <button onClick={() => setToggle(!toggle)} className={`relative h-full w-[6vw] ${toggle ? 'bg-green-500' : 'bg-neutral-400'} p-[0.25vw] rounded-[0.2vw] cursor-pointer shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]`}>
                    <span className={`text-white text-[0.7vw] font-bold absolute left-[0.3vw] top-[50%] -translate-y-1/2 ${toggle ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>COMPLETE</span>
                    <div className={`absolute flex justify-evenly items-center top-[0.17vw] ${toggle ? 'left-[4.1vw] bg-gradient-to-br from-white to-neutral-200 border-2 border-white' : 'left-[0.26vw] bg-neutral-100'} h-[80%] w-[1.6vw] rounded-[0.2vw] shadow-[0_0_9px_rgba(0,0,0,0.3)] transition-all duration-500`}>
                      <div className={`${toggle ? 'w-[0%] h-[0%] bg-green-400' : 'w-[60%] h-[60%] bg-neutral-400'} rounded-[0.14vw] transition-all duration-500`}></div>
                    </div>
                  </button>
                  {/* claim */}
                  <button className='flex justify-center items-center h-full bg-gradient-to-br from-green-500 to-blue-400 text-white bg-blue-400 border-blue-400 p-[3px] shadow-[0_0_14px_rgba(0,0,0,0.1)] cursor-pointer'>
                    <div className='relative flex justify-center items-center h-full w-full px-[3vw] bg-neutral-100'>
                      <div className='flex justify-center items-center absolute bg-gradient-to-br from-green-500 to-blue-400 h-[82%] w-[93%]'>
                        <span className='text-[1vw] font-bold text-neutral-100'>CLAIM</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>


            </div>
          </div>
          {/*  create tasks part */}
          <div className='flex flex-col justify-end w-full min-h-[10vw]'>
            <div className='flex justify-evenly items-center w-full'>
              <button className='flex justify-center items-center gap-[0.7vw] bg-neutral-100 border-2 border-neutral-300 px-[1vw] py-[0.43vw] rounded-[0.4vw] cursor-pointer group hover:border-neutral-400 transition-color duration-300'>
                <span className='text-[1vw] font-bold text-neutral-600'>ADD TASK</span>
                <span className='flex justify-center items-center border-2 border-neutral-600 rounded-full group-hover:bg-neutral-200 transition-color duration-300'>
                  <FiPlus size={23} className='text-neutral-600 group-hover:rotate-90 transition-all duration-500' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lobby
