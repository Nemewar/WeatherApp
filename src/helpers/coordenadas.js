
import axios from "axios"


//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//getCurrentPosition(success, error, options)
export const getLocalCoords = async () => {
    return new Promise((resolve, reject) => {
        //verificar si el navegador soporta geolocation
        if (!navigator.geolocation) {
            alert("El navegador en el que te encuentras no soporta el acceso a la ubicacion")
            reject({
                err: "El navegador en el que te encuentras no soporta el acceso a la ubicacion"
            })
        } else {
            //solicitar ubicacion(en local normal,
            //pero si estamos en produccion tener que estar en una pagina https)
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve({
                        latitude,
                        longitude
                    })
                },
                (err) => {
                    reject({
                        err
                    })
                }, {
                timeout: 5000,
                maximumAge: 0
            })
        }
    })
}