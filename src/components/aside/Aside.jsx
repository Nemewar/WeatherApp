import { BiCurrentLocation } from "react-icons/bi"
import { TbTemperatureCelsius } from "react-icons/tb"
import { GoLocation } from "react-icons/go"
import { useEffect, useState } from "react"


import "./aside.css"

import { resolveCurrentWeather } from "../../helpers/resolveCurrentWeather"



export const Aside = () => {

    const [clima, setClima] = useState({
        placeName: "",
        description: "",
        temp: 0,
        img: ""
    })

    
    useEffect(() => {
        resolveCurrentWeather()
            .then(({ description, temp,img, placeName }) => {
                const temC = temp-273.15;
                setClima({
                    ...clima,
                    description,
                    temp: temC.toFixed(2),
                    img,
                    placeName
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
                        <img src={clima.img} />
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
                        <p>{clima.placeName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
