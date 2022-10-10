import { BiCurrentLocation } from "react-icons/bi"
import { TbTemperatureCelsius } from "react-icons/tb"
import { GoLocation } from "react-icons/go"
import { useContext, useEffect } from "react"


import "./aside.css"

import { resolveTodayWeather } from "../../helpers/resolveWeather"
import { WeatherContext } from "../context/WeatherContext"



export const Aside = () => {

    const {localWeather,setlocalWeather} = useContext(WeatherContext);
    
    useEffect(() => {
        resolveTodayWeather()
            .then(({ description, temp,img, placeName,latitude,longitude }) => {
                const temC = temp-273.15;
                setlocalWeather({
                    ...localWeather,
                    description,
                    temp: temC.toFixed(2),
                    img,
                    placeName,
                    latitude,
                    longitude
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
                        <img src={localWeather.img} />
                    </div>
                    <div className="temperatura">
                        <p>{localWeather.temp}</p>
                        <TbTemperatureCelsius className="c" />
                    </div>
                    <div className="today-weatherName">
                        <p>{localWeather.description}</p>
                    </div>
                    <div className="today-fecha">
                        <p>Hoy</p>
                        <span>.</span>
                        <p>Mier. 8 oct</p>
                    </div>
                    <div className="today-location">
                        <GoLocation className="todayIcon" />
                        <p>{localWeather.placeName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
