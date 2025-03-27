import React from 'react'
import { cloudIcon, humidity, pressure, sunset, wind } from '../assets/icons'
import { shallowEqual, useSelector } from 'react-redux'
import Loader from './Loader'
import WeatherType from './WeatherType'

const WeatherInfo = () => {
    const weather = useSelector(store => store.weather,shallowEqual)
    const { data,status } = weather
    const cityName = data ? data.city.name + ', ' + data.city.country : '';
    const sunsetData = data ? new Date(data.city.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : '';
    const temperature = data ? data.list[0].main.temp: '';
    const weatherDes = data ? data.list[0].weather[0].description : '';
    console.log("weather info component")
  return (
    <div className='w-full h-[86%]'>
        {/* Empty result */}
        { status === 'idle' && <div className='flex flex-col items-center pt-4'>
            <img src={cloudIcon} className='w-40 lg:w-56' alt="" />
            <h1 className='text-2xl text-center mt-4'>Find Weather of your city</h1>
            </div>
            }
        {/* loader */}
            { status === 'loading' && <Loader />}
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
                {/* date wise info */}
                { data.list.slice(0, 11).map(item => {
                    const date = new Date(item.dt * 1000).toLocaleDateString().split('/').join('-')
                    const pressureData = item.main.pressure
                    const windData = item.wind.speed
                    const humidityData = item.main.humidity

                    return (
                    <div key={item.dt} className='p-2'>
                        <h1 className='text-xs'>Date: {date}</h1>
                        <WeatherType sunset={sunset} sunsetData={sunsetData} humidity={humidity} humidityData={humidityData} wind={wind} windData={windData} pressure={pressure} pressureData={pressureData} />
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