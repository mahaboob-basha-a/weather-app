import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dayTheme, nightTheme } from '../assets/icons'
import { toggleTheme } from '../store/themeSlice'
import { fetchWeather } from '../store/weatherSlice'

const Header = () => {
    const [city,setCity] = useState('')
    const theme = useSelector(store=> store.theme.isDarkMode)
    const dispatch = useDispatch()

    const fetchForcast = e =>{
      e.preventDefault()
      if(city){
        dispatch(fetchWeather(city))
      }
    }

    return (
      <div className='flex flex-col items-center gap-2 w-full'>
        <div className='flex items-center w-full justify-between'>
          <h1 className='text-2xl'>Weather App</h1>
          {/* input container for large */}
          <div className='hidden w-[260px] h-10 bg-gray-100 border-2 border-slate-500 rounded-md lg:flex items-center'>
          <input value={city} onChange={e=> setCity(e.target.value)} className='outline-none border-0 text-slate-600 h-full px-2 bg-transparent' type="text" name="weather" placeholder='Enter city' id="" />
          <button onClick={fetchForcast} className='bg-slate-950 text-white h-full w-16 rounded-r-[4px] rou border-0'>Search</button>
        </div>
          <button onClick={()=> dispatch(toggleTheme())}><img src={theme ? dayTheme : nightTheme} width={'30px'} alt="" /></button>
        </div>
        {/* input container */}
          <div className='lg:hidden w-[260px] h-10 bg-gray-100 border-2 border-slate-500 rounded-md flex items-center'>
          <input value={city} onChange={e=> setCity(e.target.value)} className='outline-none text-slate-600 border-0 h-full px-2 bg-transparent' type="text" name="weather" placeholder='Enter city' id="" />
          <button onClick={fetchForcast} className='bg-slate-950 text-white h-full w-16 rounded-r-[4px] rou border-0'>Search</button>
        </div>
      </div>
  )
}

export default Header