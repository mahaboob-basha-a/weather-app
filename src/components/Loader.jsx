import React from 'react'

const Loader = () => {
  return (
    <div className='w-full items-center flex justify-center pt-9'>
        <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full animate-bounce duration-0 bg-cyan-500"></div>
            <div className="w-4 h-4 rounded-full animate-bounce duration-200 bg-cyan-500"></div>
            <div className="w-4 h-4 rounded-full animate-bounce duration-500 bg-cyan-500"></div>
        </div>
    </div>
  )
}

export default Loader