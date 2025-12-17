import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const TaskPreferences = () => {
  const [taskClass, setTaskClass] = useState([
    { name: 'Fitness', description: 'Focused on physical health and exercise' },
    { name: 'Scholar', description: 'Focused on learning and education.' },
    { name: 'Coder', description: 'Focused on coding, building, and debugging.' },
    { name: 'Artist', description: 'Focused on creativity and artistic expression.' },
    { name: 'Wellness', description: 'Focused on mental health and self-care.' },
    { name: 'Social', description: 'Focused on social interactions and relationships.' },
    { name: 'Finance', description: 'Focused on managing money and budgeting.' },
    { name: 'Routine', description: 'Focused on daily habits and productivity.' },
    { name: 'Hobbyist', description: 'Focused on hobbies and personal interests.' },
  ])
  const [tags,setTags] = useState([]);
  const handleEnter = (e) => {
    if(e.key === 'Enter' && e.target.value !== '')
    {
      setTags([...tags, `#${e.target.value}`]);
    }
  }
  return (
    <div className='relative w-screen h-screen flex justify-center items-center'>
      <img src={assets.bg_image_2} className='w-full h-full absolute brightness-50' alt="" />
      <div className='flex flex-col justify-start items-center gap-[1vw] py-[2.5vw] px-[3vw] w-full h-full bg-black/30 backdrop-blur-xl'>
        {/* title */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[1.8vw] font-mono font-bold text-white'>Task Preferences</h1>
          <p className='text-[1vw] text-white font-mono tracking-none'>Tell us about yourself. System will generate daily tasks uniquely personalized for you.</p>
        </div>
        {/* interested preferences */}
        <div className='flex flex-col justify-center items-center gap-[1vw] w-full'>
          <div className='w-full flex justify-start'><span className='text-[1.5vw] font-semibold text-blue-400'>Interested In: </span></div>
          <div className='grid grid-cols-5 grid-rows-2 gap-[2vw] w-full min-h-[17vw]'>
            {taskClass.map((task, index) => (
              <div className='flex flex-col justify-start items-center w-full h-full px-[1vw] bg-black/40 hover:bg-black/50 border-[0.15vw] hover:border-neutral-400 rounded-[0.67vw] transition-all duration-400 cursor-pointer'>
                <div className='w-full h-[40%] flex justify-start items-center'><span className='text-[1.4vw] font-semibold text-neutral-100'>{task.name}</span></div>
                <div className='w-full h-[50%] flex justify-start items-center'><span className='text-[1vw] font-semibold text-neutral-400'>{task.description}</span></div>
              </div>
            ))}
            <div className='flex flex-col justify-start items-center w-full h-full bg-black/40 hover:bg-black/50 border-[0.15vw] px-[2vw] hover:border-neutral-400 focus-within:bg-black/50 focus-within:border-neutral-400 rounded-[0.67vw] transition-all duration-400 cursor-pointer'>
              <input type="textarea" className='text-neutral-100 w-full h-full outline-none' placeholder='Custom...' />
            </div>
          </div>
        </div>
        {/* preference tags */}
        <div className='flex flex-col justify-center items-center gap-[1vw] w-full'>
          <div className='w-full flex justify-start'><span className='text-[1.5vw] font-semibold text-blue-400'>Enter tags specifying type of tasks you want : </span></div>
          <div className='w-full flex flex-wrap justify-start items-center px-[1.5vw] gap-[1vw] bg-black/20 border-[0.14vw] rounded-[0.5vw] py-[1vw]'>
            {tags.map((tag,index)=>(
              <div className='text-[1.8vw] text-white px-[1vw] bg-neutral-700 rounded-[0.4vw]'>{tag}</div>
            ))}
            <input onKeyDown={(e)=>handleEnter(e)} type="text" className='text-[1.2vw] py-[0.4vw] px-[1vw] bg-black/30 rounded-[0.4vw] border-[0.14vw] border-black outline-none text-white'/>
          </div>
        </div>
        <NavLink to="/select-character" className='px-[1.9vw] bg-blue-500/30 border-[0.13vw] border-blue-400 py-[0.4vw] text-white font-semibold mt-[1vw] cursor-pointer hover:bg-blue-500/10 hover:border-blue-400/70 transition-all duration-300'>BEGIN</NavLink>
      </div>
    </div>
  )
}

export default TaskPreferences
