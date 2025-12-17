import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaUser } from "react-icons/fa";


const Login = () => {
  const [loginType, setLoginType] = useState(true);
  return (
    <div className='relative w-screen h-screen flex justify-center items-center'>
      <img src={assets.bg_image_1} alt="" className='w-full h-full brightness-50' />
      <div className='flex justify-center items-center absolute w-full h-full backdrop-blur-xl top-0 left-0'>
        <div className='flex flex-col justify-evenly items-center relative w-[30%] h-[70%] bg-stone-800/50 rounded-[0.9vw]'>

          <div className='flex flex-col justify-center items-center text-center'>
            <div className='w-[4.5vw] flex justify-center items-center'>
              <span className={`w-[4.5vw] h-[4.5vw] relative transition-all duration-300`}>
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
                    fillOpacity='0.15'
                    stroke="#fb923c"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>


                <span className={`absolute flex justify-center items-center w-[1.7vw] h-[1.7vw] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none`}>
                  <FaUser className='text-white text-[1.7vw]' />
                </span>
              </span>
            </div>
            <span className='text-white text-[1.1vw] font-semibold'>{loginType ? 'LOGIN' : 'SIGN UP'}</span>
          </div>

          <div className='flex relative w-[77%]'>
            <div className={`absolute w-[50%] bg-orange-400 h-full ${loginType ? 'left-0' : 'left-[50%]'} transition-all duration-500`}></div>
            <div onClick={()=>setLoginType(true)} className='w-[50%] py-[0.3vw] flex justify-center items-center bg-black/40 border-[0.1vw] border-orange-400 cursor-pointer'>
              <span className={`relative z-20 text-[1vw] ${loginType ? 'text-white' : 'text-white/50'} font-semibold transition-all duration-300`}>Login</span>
            </div>
            <div onClick={()=>setLoginType(false)} className='w-[50%] py-[0.3vw] flex justify-center items-center bg-black/40 border-[0.1vw] border-orange-400 cursor-pointer'>
              <span className={`relative z-20 text-[1vw] ${loginType ? 'text-white/50' : 'text-white'} font-semibold transition-all duration-300`}>SignUp</span>
            </div>
          </div>

          <div className='flex flex-col justify-between items-center bg- w-[77%] gap-[1.3vw]'>
            <div className='flex flex-col justify-center items-start w-full gap-[0.2vw]'>
              <span className='text-orange-400 text-[0.87vw]'>Username</span>
              <input type="text" className='bg-black/40 w-full text-white text-[1.1vw] px-[0.7vw] py-[0.3vw] outline-none border-[0.1vw] border-transparent focus:border-yellow-400/80' placeholder='Enter username' />
            </div>
            <div className='flex flex-col justify-center items-start w-full gap-[0.2vw]'>
              <span className='text-orange-400 text-[0.87vw]'>Password</span>
              <input type="text" className='bg-black/40 w-full text-white text-[1.1vw] px-[0.7vw] py-[0.3vw] outline-none border-[0.1vw] border-transparent focus:border-yellow-400/80' placeholder='Enter password' />
            </div>
            <div className='flex flex-col justify-center items-start w-full gap-[0.2vw]'>
              <span className={`text-orange-400 ${loginType ? 'text-[0vw]' : 'text-[0.87vw]'} transition-all duration-300`}>Confirm Password</span>
              <input type="text" className={`bg-black/40 ${loginType ? 'h-0 w-0 px-0 py-0' : 'h-auto w-full px-[0.7vw] py-[0.3vw]' } text-white text-[1.1vw] outline-none border-[0.1vw] border-transparent focus:border-yellow-400/80`} placeholder='Confirm Password' />
            </div>
            <button className='text-[1vw] font-semibold bg-black/40 text-white/80 px-[1.2vw] py-[0.3vw] border-[0.1vw] border-white/80 mt-[1.3vw] hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 cursor-pointer'>SUBMIT</button>
          </div>

          <div className='absolute w-[3.4vw] h-[3.4vw] bg-blue rounded-tl-[1.34vw] border-t-[0.17vw] border-l-[0.17vw] border-orange-400 -top-[0.75vw] -left-[0.75vw]'></div>
          <div className='absolute w-[3.4vw] h-[3.4vw] bg-blue rounded-tr-[1.34vw] border-t-[0.17vw] border-r-[0.17vw] border-orange-400 -top-[0.75vw] -right-[0.75vw]'></div>
          <div className='absolute w-[3.4vw] h-[3.4vw] bg-blue rounded-bl-[1.34vw] border-b-[0.17vw] border-l-[0.17vw] border-orange-400 -bottom-[0.75vw] -left-[0.75vw]'></div>
          <div className='absolute w-[3.4vw] h-[3.4vw] bg-blue rounded-br-[1.34vw] border-b-[0.17vw] border-r-[0.17vw] border-orange-400 -bottom-[0.75vw] -right-[0.75vw]'></div>
        </div>
      </div>
    </div>
  )
}

export default Login
