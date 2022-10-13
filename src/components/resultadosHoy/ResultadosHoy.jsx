import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

import "./resultadosHoy.css"

export const ResultadosHoy = () => {

    const { localWeather: { current } } = useContext(WeatherContext);

    return (
        <>
            {(current) &&
                <div className="container-container">
                    <div className="contenedor-resultadosHoy">
                        <div className="title">
                            <p>Resultados De Hoy</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Wind status</p>
                            <p className="result">{current.wind} mps</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Humidity</p>
                            <p className="result">{current.humidity}%</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Visibility</p>
                            <p className="result">{current.visibility}m</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Air pressure</p>
                            <p className="result">{current.pressure}hpa</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
