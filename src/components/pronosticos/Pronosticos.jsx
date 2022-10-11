import React, { useEffect, useState } from 'react'
import { resolveForecastWeather } from '../../helpers/resolveWeather'
import { TbTemperatureCelsius } from "react-icons/tb"

import "./pronosticos.css"

export const Pronosticos = ({ latitude, longitude }) => {

    const [listForeCast, setListForeCast] = useState([])


    useEffect(() => {
        resolveForecastWeather(latitude, longitude)
            .then(res => setListForeCast(res))
            .catch(err => console.log(err))

    }, [])




    return (
        <>
            {(listForeCast) &&

                <div className="pronosticos">
                    {listForeCast.map(({ main, weather, dt }, index) => {
                        const img = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
                        const temp = (main.temp - 273.15).toFixed(2);
                        console.log(main)
                        return (
                            <div
                                className="pronostico"
                                key={dt}>
                                <p>{index + 1}</p>
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
