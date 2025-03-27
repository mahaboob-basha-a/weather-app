import React from 'react'

const Loader = () => {
  return (
    <div className='w-full items-center flex justify-center pt-9'>
        <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:0s] bg-cyan-500"></div>
            <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:0.3s] bg-cyan-500"></div>
            <div className="w-4 h-4 rounded-full animate-bounce [animation-delay:0.6s] bg-cyan-500"></div>
        </div>
    </div>
  )
}

export default Loader