import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherProvider } from './components/context/WeatherProvider'
import { WeatherApp } from './WeatherApp'

ReactDOM.createRoot(document.getElementById('root')).render(

  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>

)
