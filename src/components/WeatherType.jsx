import React from 'react'

const WeatherType = ({sunset,sunsetData,humidity,humidityData,wind,windData,pressure,pressureData}) => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
        {/* sunset */}
            <div className='flex items-center gap-2 border shadow-sm border-slate-400 p-1 rounded-md w-28'>
                <img src={sunset} className='w-10' alt="sunset" />
                <div className='flex flex-col'>
                    <span className='text-base'> {sunsetData}</span>
                    <span className='font-light text-base'>Sunset</span>
                </div>
            </div>
        {/* humidity */}
        <div className='flex items-center gap-2 border shadow-sm border-slate-400 p-1 rounded-md w-28'>
            <img src={humidity} className='w-10' alt="" />
            <div className='flex flex-col'>
                <span className='text-base'>{humidityData}</span>
                <span className='font-light text-base'>Humidity</span>
            </div>
        </div>
        {/* wind */}
        <div className='flex items-center gap-2 border shadow-md border-slate-400 p-1 rounded-md w-28'>
            <img src={wind} className='w-10' alt="" />
            <div className='flex flex-col'>
                <span className='text-base'>{windData}</span>
                <span className='font-light text-base'>Wind</span>
            </div>
        </div>
        {/* pressure */}
        <div className='flex items-center gap-2 border shadow-md border-slate-400 p-1 rounded-md w-28'>
            <img src={pressure} className='w-10' alt="" />
            <div className='flex flex-col'>
                <span className='text-base'>{pressureData}</span>
                <span className='font-light text-base'>Pressure</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherType