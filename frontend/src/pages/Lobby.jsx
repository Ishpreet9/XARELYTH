import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import { FiPlus } from "react-icons/fi";
import { VscTriangleRight } from "react-icons/vsc";
import { NavLink, useLocation } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import { GiCheckMark } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import DifficultySlider from '../components/DifficultySlider';
import Navbar2 from '../components/Navbar2';


const Lobby = () => {

  const [toggle, setToggle] = useState(false);
  const [taskComplete, setTaskComplete] = useState(true);
  const [questComplete, setQuestComplete] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [difficultyValue, setDifficultyValue] = useState(5);

  return (
    <div className='relative flex bg-neutral-900 flex-row items-start p-[1vw] w-screen h-screen'>
      {/* left part  */}
      <div className='flex flex-col items-start w-[52%] gap-[2vw] p-[1vw] h-full'>
        {/* navbar and rank */}
        <div className='flex gap-[3.4vw]'>
          <Navbar2/>
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
          {/* <div className='flex justify-center p-[0.2vw] bg-green-400 bg-gradient-to-br from-purple-400 to-blue-400 shadow-[0_0_13px_rgba(0,0,0,0.2)] cursor-pointer'>
            <div className='relative w-full h-full flex justify-center items-center p-[0.3vw] bg-neutral-700'>
              <div className='absolute bg-neutral-700 z-30 left-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
              <div className='absolute bg-neutral-700 z-30 right-[0.1vw] top-[0.85vw] w-[0.7vw] h-[1.3vw]'></div>
              <div className='absolute bg-neutral-700 z-30 right-[0.9vw] top-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='absolute bg-neutral-700 z-30 right-[0.9vw] bottom-[0.1vw] w-[5.6vw] h-[0.7vw]'></div>
              <div className='bg-green-400 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 p-[0.1vw] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex justify-center items-center bg-neutral-700 px-[0.6vw]'>
                  <span className='text-[1.47vw] text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400 font-bold font-mono leading-none italic'>Rank: S</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* start match button */}
          <NavLink to={'/play'} className='relative flex justify-center items-center backdrop-blur-[0.1vw] bg-black/50 shadow-[0_0_13px_rgba(0,0,0,0.3)] px-[2.1vw] py-[0.5vw] cursor-pointer group'>
            <div className='absolute w-full h-full group-hover:w-[90%] group-hover:h-[85%] transition-all duration-500'>
              <div className='absolute w-[1.1vw] h-[1.1vw] group-hover:w-[0.7vw] group-hover:h-[0.7vw] top-0 left-0 border-l-[0.17vw] border-t-[0.17vw] border-white transition-all duration-500'></div>
              <div className='absolute w-[1.1vw] h-[1.1vw] group-hover:w-[0.7vw] group-hover:h-[0.7vw] bottom-0 left-0  border-l-[0.17vw] border-b-[0.17vw] border-white transition-all duration-500'></div>
              <div className='absolute w-[1.1vw] h-[1.1vw] group-hover:w-[0.7vw] group-hover:h-[0.7vw] top-0 right-0  border-t-[0.17vw] border-r-[0.17vw] border-white transition-all duration-500'></div>
              <div className='absolute w-[1.1vw] h-[1.1vw] group-hover:w-[0.7vw] group-hover:h-[0.7vw] bottom-0 right-0  border-b-[0.17vw] border-r-[0.17vw] border-white transition-all duration-500'></div>
            </div>
            <span style={{fontFamily: 'Luckiest Guy'}} className='text-[1.77vw] text-white tracking-[0.17vw]'> PLAY </span>
          </NavLink>
          {/* <NavLink to={'/play'} className='relative bg-blue-400 px-[0.5vw] py-[0.5vw] cursor-pointer group border-2 border-blue-500 hover:border-violet-400 shadow-[0_0_13px_rgba(0,0,0,0.3)] overflow-hidden'>
            <div className='absolute z-30 group-hover:-rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 group-hover:bg-neutral-100 left-[0.21vw] top-[0.21vw] border-2 border-neutral-100 group-hover:border-violet-400 transition-all duration-500'></div>
            <div className='absolute z-30 group-hover:rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 group-hover:bg-neutral-100 right-[0.21vw] top-[0.21vw] border-2 border-neutral-100 group-hover:border-violet-400 transition-all duration-500'></div>
            <div className='absolute z-30 group-hover:-rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 group-hover:bg-neutral-100 left-[0.21vw] bottom-[0.21vw] border-2 border-neutral-100 group-hover:border-violet-400 transition-all duration-500'></div>
            <div className='absolute z-30 group-hover:rotate-45 w-[0.75vw] h-[0.75vw] bg-blue-400 group-hover:bg-neutral-100 right-[0.21vw] bottom-[0.21vw] border-2 border-neutral-100 group-hover:border-violet-400 transition-all duration-500'></div>
            <div className='absolute z-20 w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 group-hover:bg-violet-400 right-[0.21vw] bottom-[0.21vw] transition-all duration-500'></div>
            <div className='absolute z-20 w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 group-hover:bg-violet-400 left-[0.21vw] bottom-[0.21vw] transition-all duration-500'></div>
            <div className='absolute z-20 w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 group-hover:bg-violet-400 right-[0.21vw] top-[0.21vw] transition-all duration-500'></div>
            <div className='absolute z-20 w-[0.75vw] h-[0.75vw] group-hover:w-[1.6vw] group-hover:h-[1.7vw] bg-blue-400 group-hover:bg-violet-400 left-[0.21vw] top-[0.21vw] transition-all duration-500'></div>
            <div className='absolute z-10 bg-violet-400 w-0 h-0 group-hover:w-[9vw] group-hover:h-[4vw] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 transition-all duration-500'></div>
            <div className='relative z-10 flex justify-center items-center text-[1.2vw] text-neutral-100 font-bold font-mono border-2 border-neutral-100 w-full h-full px-[1.3vw] transition-all duration-500'>
              <span className='relative z-20 leading-none'>MATCH</span>
            </div>
          </NavLink> */}
        </div>
        {/* character */}
        <div className='relative flex gap-[1vw] w-full bg-neutral-800 border-4 border-black shadow-[0_0_13px_rgba(0,0,0,0.3)] rounded-[0.7vw] p-[0.3vw] overflow-hidden'>
          <div className='relative z-10 w-[37%] h-[100%] overflow-hidden rounded-[0.7vw]'>
            <img src={assets.obscerion_l3} alt="" className='' />
          </div>
          {/* moving through different chracter levels */}
          <div className='flex flex-col py-[0.3vw] justify-start relative z-10 h-full w-[2.5vw] gap-[1.2vw] select-none'>
            <span className='flex justify-center items-center text-[1.1vw] text-blue-500 font-semibold w-full h-[2.5vw] bg-blue-400/20 border-2 border-blue-500 rounded-lg cursor-pointer'>1</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>2</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>3</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>4</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>5</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>6</span>
            <span className='flex justify-center items-center text-[1.1vw] text-neutral-100 font-semibold w-full h-[2.5vw] bg-neutral-400/20 border-2 border-neutral-400 rounded-lg cursor-pointer'>7</span>
          </div>
          {/* character info & stats */}
          <div className='relative z-10 flex flex-col p-[0.7vw] rounded-[0.7vw] justify-between items-start flex-1'>
            <div>
              <h1 className='font-mono text-[2vw] text-neutral-100 font-bold'>OBSCERION</h1>
              <span className='text-[1vw] text-neutral-100 font-semibold'>Class: Shadowbound</span>
            </div>
            {/* health and mana */}
            <div className='flex flex-col gap-[1.1vw] py-[1vw] px-[0.34vw] '>
              {/* vitality */}
              <div className='flex justify-start items-center gap-[0.3vw]'>
                <div className='relative w-[13vw] h-[1vw] bg-gradient-to-r from-red-700 to-red-400 -skew-x-17 border-[0.152vw]'>
                  <img src={assets.health_icon} alt="" className='absolute left-0 -translate-x-[50%] top-0 -translate-y-[38%] skew-x-17 w-[3vw]'/>
                </div>
                <span className='text-xl font-semibold mb-[0.34vw] pl-[0.43vw]'>100</span>
              </div>
              {/* mp */}
              <div className='flex justify-start items-center gap-[0.3vw]'>
                <div className='relative w-[13vw] h-[1vw] bg-gradient-to-r from-blue-600 to-blue-400/90 -skew-x-17 border-[0.152vw]'>
                  <img src={assets.mana_icon} alt="" className='absolute left-0 -translate-x-[50%] top-0 -translate-y-[40%] skew-x-17 w-[3vw]'/></div>
                <span className='text-xl font-semibold mb-[0.34vw] pl-[0.43vw]'>100</span>
              </div>
            </div>
            {/* abilities */}
            <div className='flex justify-between items-center w-full my-[0.5vw]'>
              <img src={assets.banner} alt="" className='w-[6.9vw]'/>
              <img src={assets.banner} alt="" className='w-[6.9vw]'/>
              <img src={assets.banner} alt="" className='w-[6.9vw]'/>
            </div>
            {/* banner */}
            <img src={assets.horizontal_banner} alt="" className='w-[15vw]'/>
          </div>
        </div>
        {/* special quests */}
        <div className='flex w-full flex-1 bg-neutral-800 border-[0.2vw] border-neutral-700 p-[0.3vw] rounded-[0.7vw] shadow-[0_0_13px_rgba(0,0,0,0.3)] '>
          <div className='flex flex-col justify-start items-start w-[70%] h-full p-[1vw]'>
            <span className='font-mono text-[0.87vw] font-semibold text-blue-300'>SPECIAL QUEST</span>
            <div className='w-full flex justify-between items-center'>
              <span className='text-[1.34vw] font-bold text-slate-100 border-b-2 border-dashed border-slate-400/80 py-[0vw]'>Echoes Of The Void</span>
              {/* time indicator */}
              <span className='bg-blue-400/10 h-[89.9%] border-2 border-blue-400/50 px-[1vw] flex gap-[0.43vw] justify-center items-center text-blue-300 text-[0.9vw] font-semibold rounded-[0.21vw]'>
              {
                questComplete ? 
                <GiCheckMark size={19} className='text-white bg-blue-400 rounded-full p-[0.1vw]'/>
                :
                <MdAccessTimeFilled size={23}/>
              }
                <span className={`font-mono ${questComplete ? "tracking-[0.09vw]" : "tracking-[0.03vw]" }`}>{questComplete ? "COMPLETED" : "7D 12H"}</span>
              </span>
            </div>
            <span className='text-[1vw] font-semibold mt-[0.7vw] text-slate-100'>Objective</span>
            <span className='max-w-full text-[0.87vw] font-normal text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit porro ipsum recusandae distinctio excepturi! Porro hic, corrupti nulla aperiam rem magnam cupiditate? Expedita praesentium magni eum molestias itaque? Cumque, neque?</span>
          </div>
          <div className='relative flex flex-col justify-between px-[1vw] py-[0.9vw] w-[30%] h-full rounded-r-lg'>
            <div className='absolute w-[2vw] h-[2vw] top-1 left-1 border-t-2 border-l-2 border-neutral-400/70'></div>
            <div className='absolute w-[2vw] h-[2vw] bottom-1 left-1 border-b-2 border-l-2 border-neutral-400/70'></div>
            <div className='absolute w-[2vw] h-[2vw] top-1 right-1 border-t-2 border-r-2 rounded-tr-[0.52vw] border-neutral-400/70'></div>
            <div className='absolute w-[2vw] h-[2vw] bottom-1 right-1 border-b-2 border-r-2 rounded-br-[0.52vw] border-neutral-400/70'></div>
            <span className='font-mono text-[1.13vw] tracking-[0.3vw] text-slate-100 font-semibold leading-none'>REWARDS</span>
            <div className='flex flex-col justify-start w-full h-[50%] gap-[1vw] overflow-y-scroll custom-scroll'>
              <div className='bg-blue-400/20 flex justify-center itmes-centers border-[0.11vw] border-blue-400/50 text-[1vw] text-blue-300 font-mono font-medium rounded-[0.25vw]'>REWARD 1</div>
              <div className='bg-blue-400/20 flex justify-center itmes-centers border-[0.11vw] border-blue-400/50 text-[1vw] text-blue-300 font-mono font-medium rounded-[0.25vw]'>REWARD 2</div>
              <div className='bg-blue-400/20 flex justify-center itmes-centers border-[0.11vw] border-blue-400/50 text-[1vw] text-blue-300 font-mono font-medium rounded-[0.25vw]'>REWARD 3</div>
            </div>
            <button onClick={()=>setQuestComplete(true)} className='relative border-2 border-neutral-400 rounded-md hover:rounded-none hover:border-blue-600 px-[1.2vw] py-[0.5vw] text-[1vw] font-bold cursor-pointer group overflow-hidden transition-all duration-500'>
              <div class="absolute rounded-[0.2vw] group-hover:rounded-none z-10 top-[0.25vw] left-[0.25vw] group-hover:rotate-180 w-0 h-0 border-t-[13px] border-t-blue-400 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute rounded-[0.2vw] group-hover:rounded-none z-10 top-[0.25vw] right-[0.25vw] group-hover:-rotate-90 rotate-90 w-0 h-0 border-t-[13px] border-t-blue-400 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute rounded-[0.2vw] group-hover:rounded-none z-10 bottom-[0.25vw] left-[0.25vw] group-hover:-rotate-270 -rotate-90 w-0 h-0 border-t-[13px] border-t-blue-400 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div class="absolute rounded-[0.2vw] group-hover:rounded-none z-10 bottom-[0.25vw] right-[0.25vw] group-hover:rotate-0 -rotate-180 w-0 h-0 border-t-[13px] border-t-blue-400 group-hover:border-t-neutral-100 border-r-[13px] border-r-transparent transition-all duration-500"></div>
              <div className='absolute w-0 opacity-20 group-hover:opacity-100 group-hover:w-[13vw] h-0 group-hover:h-[7vh] bg-blue-400 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] transition-all duration-1000'></div>
              <span className='relative z-20 text-white group-hover:text-neutral-100 transition-color duration-500'>COMPLETE</span>
            </button>
          </div>
        </div>
      </div>
      {/* right part */}
      <div className='h-full flex-1 w-full p-[1vw]'>
        <div className='flex flex-col justify-between backdrop-blur-lg w-full h-full rounded-[0.7vw] shadow-[0_0_13px_rgba(0,0,0,0.3)] p-[1vw]'>
          {/* title and tasks part */}
          <div className={`flex flex-col ${addTask ? 'h-[77%]' : 'h-[89%]'} justify-center items-center w-full transition-all duration-500`}>
            {/* title part */}
            <div className='relative w-[26vw]'>
              <img src={assets.text_bg} alt="" className='w-full h-full opacity-40' />
              <span className='absolute inset-0 tracking-[0.6vw] flex justify-start left-[7vw] leading-none top-[5.2vw] ms-center text-neutral-200/90 font-black text-[1.2vw] font-mono'>DAILY TASKS</span>
            </div>
            {/* tasks */}
            <div className='flex flex-col w-full gap-[2.5vw] overflow-scroll custom-scroll h-[80%] px-[0.8vw]'>
              {/* replace with array in future */}
              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>



              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>



              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>



              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>



              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>



              <div className='flex border-2 border-neutral-300/70 px-[0.7vw] py-[0.7vw] rounded-lg bg-black/20 justify-between w-full'>
                {/* checkbox */}
                <div className='flex items-center'>
                  <div className='w-[1.8vw] h-[1.8vw]'>
                    <Checkbox taskComplete={taskComplete} setTaskComplete={setTaskComplete}/>
                  </div>
                </div>
                {/* task */}
                <span className='flex justify-starrt px-[1vw] text-neutral-100 items-center flex-1 text-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, neque?</span>
                {/* toggle button and claim */}
                <div className='flex justify-center items-center gap-[1vw]'>
                  {/* claim */}
                  <button className='border-2 border-blue-500/60 bg-blue-400 w-[5vw] text-[1vw] font-bold text-white rounded-md h-[120%] hover:bg-blue-400/90 hover:shadow-[0_0_40px_1px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer '>CLAIM</button>
                </div>
              </div>







            </div>
          </div>
          {/*  create tasks part */}
          <div className='flex flex-col justify-end items-center w-full h-full px-[0.69vw] pb-[0.69vw]'>
              <div className={`${addTask ? 'border-2' : 'border-0'} border-neutral-400 bg-neutral-100 rounded-[0.43vw] ${addTask ? 'w-full h-full' : ''} transition-all duration-700 overflow-hidden`}>
                {/* add task button */}
                <button onClick={() => setAddTask(!addTask)} className={`${addTask ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'} flex justify-center items-center gap-[0.7vw] bg-neutral-100 border-2 border-neutral-300 px-[1vw] py-[0.43vw] rounded-[0.4vw] cursor-pointer group hover:border-neutral-400 hover:transition-color hover:duration-300`}>
                  <span className='text-[1vw] font-bold text-neutral-600'>ADD TASK</span>
                  <span className='flex justify-center items-center border-2 border-neutral-600 rounded-full group-hover:bg-neutral-200 transition-color duration-300'>
                    <FiPlus size={23} className='text-neutral-600 group-hover:rotate-90 transition-all duration-500' />
                  </span>
                </button>
                {/* inside content of add task */}
                <div className={`${addTask ? 'flex' : 'hidden'} flex-col justify-evenly items-center w-full h-full px-[0.7vw] py-[0.77vw] gap-[0.52vw]`}>
                  <textarea type="text" className='px-[0.5vw] py-[0.3vw] text-[1vw] w-full flex-1 border-2 border-neutral-300 outline-none focus:border-neutral-400 rounded-[0.4vw] transition-all duration-500' placeholder='--- Enter new task ---'/>
                  <div className='flex jusity-between items-center w-full flex-1 justify-evenly'>
                    {/* difficulty select */}
                    <div className='flex jusity-between items-center h-full flex-1 justify-center items-center'>
                      <div className='flex flex-col justify-center gap-[0.2vw] items-center pl-[1vw]'>
                        <span className='text-[0.9vw] leading-none font-semibold text-neutral-600'>Difficulty</span>
                        <span className='text-[1.1vw] leading-none font-bold text-blue-200'>{difficultyValue}</span>
                      </div>
                      <div className='flex justify-center flex-1'>
                        <input type="range" className='w-[90%] cursor-pointer accent-blue-500' min={1} max={10} value={difficultyValue} onChange={(e) => setDifficultyValue(e.target.value)}/>
                      </div>
                    </div>
                    <div className='h-full flex justify-cneter items-center'>
                      <button className='bg-blue-400 text-[0.85vw] font-semibold text-white cursor-pointer border-2 border-blue-400 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 h-[2.4vw] w-[5.2vw] rounded-[0.3vw] transition-all duration-300'> 
                        Add Task + 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Lobby
