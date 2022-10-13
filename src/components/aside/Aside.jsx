import { BiCurrentLocation } from "react-icons/bi"
import { TbTemperatureCelsius } from "react-icons/tb"
import { GoLocation } from "react-icons/go"
import { useContext} from "react"


import "./aside.css"

import { WeatherContext } from "../context/WeatherContext"
import { day, nextDay } from "../../helpers/diasSiguientes"



export const Aside = () => {

    const { localWeather: { current } } = useContext(WeatherContext);



    return (
        <>

            <div className="contenedor-aside">
                <div className="aside">
                    {
                        (current) &&
                        <>
                            <div className="top">
                                <p>
                                    Search for places
                                </p>
                                <BiCurrentLocation
                                    className="placeIcon"
                                />
                            </div>
                            <div className="contenedor-img">
                                <img src={current.img} />
                            </div>
                            <div className="temperatura">
                                <p>{current.temp}</p>
                                <TbTemperatureCelsius className="c" />
                            </div>
                            <div className="today-weatherName">
                                <p>{current.description}</p>
                            </div>
                            <div className="today-fecha">
                                <p>Hoy</p>
                                <span>.</span>
                                <p>{day(nextDay(1))}. 8 oct</p>
                            </div>
                            <div className="today-location">
                                <GoLocation className="todayIcon" />
                                <p>Lima</p>
                            </div>
                        </>
                    }
                </div>
            </div>

        </>
    )
}
