import React from 'react'
import { Aside } from './components/aside/Aside'
import { Resultados } from './components/resultados/Resultados'

import "./weatherApp.css"

export const WeatherApp = () => {

  return (
    <>
      <div className='contenedor-todo'>
        <Aside />
        <Resultados />
      </div>
    </>
  )
}
