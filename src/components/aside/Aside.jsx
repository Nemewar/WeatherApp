import { BiCurrentLocation } from "react-icons/bi"
import { TbTemperatureCelsius } from "react-icons/tb"
import { GoLocation } from "react-icons/go"
import { useEffect, useState } from "react"


import "./aside.css"
import { currentLocation } from "../../helpers/currentLocation"
import { currentWeather } from "../../helpers/currentWeather"
import { resolveCurrentWeather } from "../../helpers/resolveCurrentWeather"



export const Aside = () => {

    const [clima, setClima] = useState({
        description: "",
        temp: 0
    })

    useEffect(() => {
        resolveCurrentWeather(currentLocation, currentWeather)
            .then(({ description, temp }) => {
                const temC = temp-273.15;
                setClima({
                    ...clima,
                    description,
                    temp: temC.toFixed(2)
                })
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <div className="contenedor-aside">
                <div className="aside">
                    <div className="top">
                        <p>
                            Search for places
                        </p>
                        <BiCurrentLocation
                            className="placeIcon"
                        />
                    </div>
                    <div className="contenedor-img">
                        <img src="/assets/img/shower.png" />
                    </div>
                    <div className="temperatura">
                        <p>{clima.temp}</p>
                        <TbTemperatureCelsius className="c" />
                    </div>
                    <div className="today-weatherName">
                        <p>{clima.description}</p>
                    </div>
                    <div className="today-fecha">
                        <p>Hoy</p>
                        <span>.</span>
                        <p>Mier. 8 oct</p>
                    </div>
                    <div className="today-location">
                        <GoLocation className="todayIcon" />
                        <p>Lima</p>
                    </div>
                </div>
            </div>
        </>
    )
}
