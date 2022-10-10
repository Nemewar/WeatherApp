import React from 'react'
import { Aside } from './components/aside/Aside'
import { WeatherProvider } from './components/context/WeatherProvider'
import { Resultados } from './components/resultados/Resultados'

import "./weatherApp.css"

export const WeatherApp = () => {


  return (
    <WeatherProvider>
      <div className='contenedor-todo'>
        <Aside />
        <Resultados />
      </div>
    </WeatherProvider>
  )
}
