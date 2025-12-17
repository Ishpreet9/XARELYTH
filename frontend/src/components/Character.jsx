import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Character = ({ currentLevel }) => {
  const [image, setImage] = useState(assets.kazuki_l1);
  useEffect(() => {
    switch (currentLevel) {
      case 1:
        setImage(assets.kazuki_l1_vid);
        break;
      case 2:
        setImage(assets.kazuki_l2_vid);
        break;
      case 3:
        setImage(assets.kazuki_l3_vid);
        break;
      case 4:
        setImage(assets.kazuki_l4_vid);
        break;
      case 5:
        setImage(assets.kazuki_l5_vid);
        break;
      case 6:
        setImage(assets.kazuki_l6_vid);
        break;
      default:
        setImage(assets.kazuki_l1_vid);
    }
  }, [currentLevel])
  return (
    <div className='relative w-[17vw] h-[24vw]'>
      <div className='relative w-full h-full border-[0.23vw] rounded-[1vw] overflow-hidden'>
        <video src={image} alt="" autoPlay muted loop className='absolute top-[50%] -translate-y-[50%]' />
      </div>
      <div className='flex justify-between items-center w-full absolute -translate-y-[53%]'>
        <div
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }} className='relative w-[5.2vw] h-[4.7vw] bg-orange-400 z-40 top-0'>

          <div
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            }} className='absolute w-[4.9vw] h-[4.45vw] top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 bg-neutral-900 z-40 top-0'>
          </div>
        </div>
        <div
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }} className='relative w-[5.2vw] h-[4.7vw] bg-orange-400 z-40 top-0 mt-[3vw]'>

          <div
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            }} className='absolute w-[4.9vw] h-[4.45vw] top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 bg-neutral-900 z-40 top-0'>
          </div>
        </div>
        <div
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }} className='relative w-[5.2vw] h-[4.7vw] bg-orange-400 z-40 top-0'>

          <div
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            }} className='absolute w-[4.9vw] h-[4.45vw] top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 bg-neutral-900 z-40 top-0'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character
