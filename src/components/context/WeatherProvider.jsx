import React, { useState } from 'react'
import { WeatherContext } from './WeatherContext'

export const WeatherProvider = ({ children }) => {

    const [localWeather, setlocalWeather] = useState({});
    

    return (
        <WeatherContext.Provider value={{
            localWeather,
            setlocalWeather
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
