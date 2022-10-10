

import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { Pronosticos } from "../pronosticos/Pronosticos"
import "./resultados.css"

export const Resultados = () => {

    const { localWeather: { latitude, longitude } } = useContext(WeatherContext);


    return (
        <>
            <div className="contenedor-resultados">
                {
                    (latitude) &&
                    <Pronosticos
                        latitude={latitude}
                        longitude={longitude}
                    />
                }
                <div className="resultados-hoy">

                </div>
            </div>
        </>
    )
}
