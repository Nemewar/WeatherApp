import React, { useContext, useEffect } from 'react'
import { Aside } from './components/aside/Aside'
import { WeatherContext } from './components/context/WeatherContext'

import { Resultados } from './components/resultados/Resultados'
import { resolveLocalWeather } from './helpers/resolveWeather'


import "./weatherApp.css"

export const WeatherApp = () => {

  const { setlocalWeather } = useContext(WeatherContext);

  useEffect(() => {
    resolveLocalWeather()
      .then(res => {
        console.log(res)
        setlocalWeather(res)
      })
      .catch(err => console.log(err))
  }, [])




  return (

    <div className='contenedor-todo'>
      <Aside />
      <Resultados />
    </div>

  )
}
