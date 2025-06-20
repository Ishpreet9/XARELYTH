import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import CrossButton from './CrossButton'

const SelectionBox = ({selectionBoxVisible, setSelectionBoxVisible}) => {
  return (
    <div className={`flex justify-center items-center absolute inset-0 w-screen h-screen backdrop-blur-lg ${selectionBoxVisible ? '' : 'scale-0'} transition-all duration-400`}>
        <div className='relative flex h-[69vh] w-[69vw] bg-neutral-100 shadow-xl p-[1.43vw] gap-[1.43vw] rounded-[0.7vw]'>
            <div onClick={()=>setSelectionBoxVisible(false)} className='absolute z-10 right-[1vw] -top-[3.8vw]'>
               <CrossButton/>
            </div>
            <div className='h-full w-[21.4vw] bg-green-400 overflow-hidden rounded-[0.7vw] border-2 border-neutral-100'>
                <img src={assets.obscerion_l3} alt="" />
            </div>
            <div className='flex flex-col gap-[1.5vw] p-[1.7vw] bg-neutral-200 h-full flex-1 rounded-[0.7vw]'>
              <span className='text-3xl text-neutral-800 font-mono font-semibold'>OBSCERION</span>
              <div className='flex flex-col gap-[0.7vw] text-xl text-neutral-600'>
                <span>It is foretold that on the final day — when all stars burn out and the last question is asked — Obscerion will unseal his face. The crosses will open. Not to reveal answers, but to return all the world's forgotten truths at once.</span>
                <span>That day is called The Unbinding, and it is feared not for destruction… but for absolute understanding.</span>
                <span>And so Obscerion waits, carved in shadow — the last echo before truth speaks.</span>
              </div>
              <div className='flex justify-center items-center border-2 border-dashed border-neutral-300 w-full h-[8vw] text-neutral-500 font-semibold text-xl'>
                <span>STATS</span>
              </div>
              <div className='flex justify-center items-center w-full flex-1'>
                 <NavLink to={'/lobby'} className='relative flex justify-center items-center w-[9.5vw] h-[80%] text-2xl text-[1.3vw] bg-transparent border-2 border-green-600 hover:border-white font-bold cursor-pointer text-green-600 overflow-hidden group'>
                  <div className='absolute w-[120%] h-[130%] bg-green-500 skew-x-12 -translate-x-[11vw] group-hover:translate-x-0 transition-all duration-1000'></div>
                   <span className='relative z-10 group-hover:text-white transition-color duration-700'>CONFIRM</span>
                 </NavLink>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SelectionBox
