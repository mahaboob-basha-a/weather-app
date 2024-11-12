import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import WeatherInfo from './WeatherInfo'

const Weather = () => {
  const theme = useSelector(store=> store.theme.isDarkMode)

  return (
    <div className={`w-[80%] md:w-[60%] h-[72%] shadow-md shadow-gray-400 rounded-lg p-8 ${theme ? 'bg-slate-500' : 'bg-gray-100' }`}>
      <Header />
      <WeatherInfo />
    </div>
  )
}

export default Weather