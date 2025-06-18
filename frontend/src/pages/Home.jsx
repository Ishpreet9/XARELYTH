import React, { useState } from 'react'
import BlueButton from '../components/BlueButton'
import { assets } from '../assets/assets'

const Home = () => {

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-neutral-100'>
      {/* background elements */}
      <div className='absolute w-[85vw] h-[86vh] border-y-2 border-neutral-200'></div>
      <div className='flex justify-between items-center absolute h-screen w-screen'>
        <div className="relative h-[12vw] w-[3vw] opacity-30">
          {/* Rune 2 (moves to top) */}
          <img
            src={assets.rune_l_2}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[0]' : 'top-[3vw]'
              }`}
          />

          {/* Rune 1 (moves to second position) */}
          <img
            src={assets.rune_l_1}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[3vw]' : 'top-[0]'
              }`}
          />

          {/* Rune 4 (moves to third position) */}
          <img
            src={assets.rune_l_4}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[6vw]' : 'top-[9vw]'
              }`}
          />

          {/* Rune 3 (moves to bottom) */}
          <img
            src={assets.rune_l_3}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[9vw]' : 'top-[6vw]'
              }`}
          />
        </div>
        <div className="relative h-[12vw] w-[3vw] opacity-30">
          {/* Rune 2 (moves to top) */}
          <img
            src={assets.rune_r_2}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[0]' : 'top-[3vw]'
              }`}
          />

          {/* Rune 1 (moves to second position) */}
          <img
            src={assets.rune_r_1}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[3vw]' : 'top-[0]'
              }`}
          />

          {/* Rune 4 (moves to third position) */}
          <img
            src={assets.rune_r_4}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[6vw]' : 'top-[9vw]'
              }`}
          />

          {/* Rune 3 (moves to bottom) */}
          <img
            src={assets.rune_r_3}
            alt=""
            className={`absolute w-[3vw] transition-all duration-1000 ease-out ${buttonHover ? 'top-[9vw]' : 'top-[6vw]'
              }`}
          />
        </div>
        {/* <div className=''>
          <img src={assets.rune_r_1} alt="" className='w-[3vw]' />
          <img src={assets.rune_r_2} alt="" className='w-[3vw]' />
          <img src={assets.rune_r_3} alt="" className='w-[3vw]' />
          <img src={assets.rune_r_4} alt="" className='w-[3vw]' />
        </div> */}
      </div>
      <div className='flex justify-evenly gap-[25vw] items-center absolute h-screen w-screen select-none'>
        <div className='vertical-japanese text-[2.5vw] border-y-2 border-neutral-200 py-[5vw] text-neutral-400'>
          闇が目覚めし時、力は試される。
        </div>
        <div className='vertical-japanese text-[2.5vw] border-y-2 border-neutral-200 py-[5vw] text-neutral-400'>
          運命を切り裂け、影の覇者として。
        </div>
      </div>
      <img src={assets.logo} alt="" className='w-[25vw]' />
      <div className='flex justify-between items-center mb-[1vw] w-[29vw] h-[3vw] gap-[2vw]'>
        <div className={`bg-neutral-200 h-[3vw] w-[3vw] transform ${buttonHover ? '' : 'rotate-[45deg]'} transition-all duration-1000`}></div>
        <div className='bg-transparent h-[3vw] flex-1 border-x-4 border-neutral-200'></div>
        <div className={`bg-neutral-200 h-[3vw] w-[3vw] transform ${buttonHover ? '' : 'rotate-[45deg]'} transition-all duration-1000`}></div>
      </div>
      <div className='flex flex-col gap-[2.5vw]'>
        <BlueButton text={'START'} redirectionLink={'/select-character'} setButtonHover={setButtonHover} />
        <BlueButton text={'TUTORIAL'} redirectionLink={'/tutorial'} setButtonHover={setButtonHover} />
      </div>
    </div>
  )
}

export default Home
