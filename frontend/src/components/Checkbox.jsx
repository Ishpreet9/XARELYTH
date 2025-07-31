import React from 'react'

const Checkbox = ({taskComplete, setTaskComplete}) => {
  return (
    <div onClick={()=>setTaskComplete(!taskComplete)} className={`flex justify-center items-center border-2 ${taskComplete ? "border-blue-400" : "border-neutral-400/80"} w-full h-full bg-neutral-100 rounded-[0.34vw] cursor-pointer transition-all duration-500 overflow-hidden`}>
      {
        <div className={`${taskComplete ? "w-[70%] h-[70%]" : "w-0 h-0 opacity-0"} border-[0.17vw] border-blue-400 bg-neutral-100 rounded-[0.2vw] transition-all duration-500 flex justify-center items-center`}>
            <div className={`bg-blue-400 ${taskComplete ? "w-[50%] h-[50%]" : "w-0 h-0 opacity-0"} rounded-[0.1vw] transition-all duration-500`}></div>
        </div>
      }
    </div>
  )
}

export default Checkbox
