//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//getCurrentPosition(success, error, options)

export const currentLocation = async () => {
    return new Promise((resolve, reject) => {
        //verificar si el navegador soporta geolocation
        if (!navigator.geolocation) {
            alert("El navegador en el que te encuentras no soporta el acceso a la ubicacion")
            reject({
                err: "El navegador en el que te encuentras no soporta el acceso a la ubicacion"
            })
        } else {
            //solicitar ubicacion
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { longitude, latitude } = position.coords;
                    resolve({
                        latitude,
                        longitude
                    })
                },
                ()=>{
                    reject({
                        err: "Ubicación no concebida"
                    })
                })
        }
    })
}