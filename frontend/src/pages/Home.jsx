import React from 'react'
import BlueButton from '../components/BlueButton'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col justify-evenly items-center h-screen w-screen bg-neutral-100'>
      <img src={assets.logo} alt="" className='w-[25vw]'/>
      <div className='flex flex-col gap-[2.5vw]'>
      <BlueButton text={'START'} redirectionLink={'/start'}/>
      <BlueButton text={'TUTORIAL'} redirectionLink={'/tutorial'}/>
      </div>
    </div>
  )
}

export default Home
