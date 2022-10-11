import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

import "./resultadosHoy.css"

export const ResultadosHoy = () => {

    const { localWeather: { todayHightlights } } = useContext(WeatherContext);

    return (
        <>
            {(todayHightlights) &&
                <div className="container-container">
                    <div className="contenedor-resultadosHoy">
                        <div className="title">
                            <p>Resultados De Hoy</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Wind status</p>
                            <p className="result">{todayHightlights.wind} mps</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Humidity</p>
                            <p className="result">{todayHightlights.humidity}%</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Visibility</p>
                            <p className="result">{todayHightlights.visibility}m</p>
                        </div>
                        <div className="hightlight">
                            <p className="name">Air pressure</p>
                            <p className="result">{todayHightlights.pressure}hpa</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
