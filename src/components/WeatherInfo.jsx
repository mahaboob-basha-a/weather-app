import React from 'react'
import { cloudIcon, humidity, pressure, sunset, wind } from '../assets/icons'
import { useSelector } from 'react-redux'

const WeatherInfo = () => {
    const weather = useSelector(store => store.weather)
    const { data,status } = weather
    const cityName = data ? data.city.name + ', ' + data.city.country : '';
    const sunsetData = data ? new Date(data.city.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : '';
    const temperature = data ? data.list[0].main.temp: '';
    const weatherDes = data ? data.list[0].weather[0].description : '';

  return (
    <div className='w-full h-[86%]'>
        {/* Empty result */}
        { status === 'idle' && <div className='flex flex-col items-center pt-4'>
            <img src={cloudIcon} className='w-40 lg:w-56' alt="" />
            <h1 className='text-2xl text-center mt-4'>Find Weather of your city</h1>
            </div>
            }
        {/* loader */}
            { status === 'loading' && <div className='w-full items-center flex justify-center pt-9'>
                <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full animate-bounce bg-cyan-500"></div>
                    <div className="w-4 h-4 rounded-full animate-bounce bg-cyan-500"></div>
                    <div className="w-4 h-4 rounded-full animate-bounce bg-cyan-500"></div>
                </div>
            </div>}
        {/* failure */}
        { status === 'failed' && <div className='flex flex-col items-center pt-4'>
            <img src={cloudIcon} className='w-40 lg:w-56' alt="" />
            <h1 className='text-2xl text-center mt-4'>Weather details not found</h1>
            </div>
            }
        {/* temperature */}
        { data && <>
        <div>
            <div className='flex items-center justify-center gap-4 md:gap-10 p-2'>
                <div className='flex items-center gap-1'>
                    <h1 className='text-3xl font-light'>{temperature}℃</h1>
                    <span className='font-light text-lg'>| {weatherDes}</span>
                </div>
                <img src={cloudIcon} className='w-32 md:w-44' alt="" />
            </div>
            <h1 className='text-2xl text-center'>{cityName}</h1>
        </div>
        {/* more information */}
        <div className='w-full h-[50%]'>
            <h1 className='text-base'>Weather Info</h1>
            {/* weather info */}
            <div className='pl-10 h-full w-full overflow-auto weather-info'>
                {/* date wise */}
                { data.list.slice(0, 11).map(item => {
                    const date = new Date(item.dt * 1000).toLocaleDateString().split('/').join('-')
                    const pressureData = item.main.pressure
                    const windData = item.wind.speed
                    const humidityData = item.main.humidity

                    return (
                        <div key={item.dt} className='p-2'>
                    <h1 className='text-xs'>Date: {date}</h1>
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
                </div>
                    )
                })}
            </div>
        </div>
        </> }
    </div>
  )
}

export default WeatherInfo