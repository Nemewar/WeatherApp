import { Pronosticos } from "../pronosticos/Pronosticos"
import { ResultadosHoy } from "../resultadosHoy/ResultadosHoy"
import "./resultados.css"

export const Resultados = () => {

    return (
        <>
            <div className="contenedor-resultados">
                <Pronosticos />

                <ResultadosHoy />

            </div>
        </>
    )
}
