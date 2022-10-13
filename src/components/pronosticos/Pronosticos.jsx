import React, { useContext} from 'react'
import { TbTemperatureCelsius } from "react-icons/tb"

import "./pronosticos.css"
import { diasSiguientes } from '../../helpers/diasSiguientes'
import { WeatherContext } from '../context/WeatherContext'

export const Pronosticos = () => {

    const {localWeather:{daily}} = useContext(WeatherContext);

    return (
        <>
            {(daily) &&

                <div className="pronosticos">
                    {daily.map(({ temp, img, dt }, index) => {
                        return (
                            <div
                                className="pronostico"
                                key={dt}>
                                <p>{diasSiguientes()[index]}</p>
                                <img src={img}></img>
                                <div className='temp'>
                                    <p>{temp}<TbTemperatureCelsius /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            }

        </>
    )
}
