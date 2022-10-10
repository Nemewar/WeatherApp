//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//getCurrentPosition(success, error, options)


import axios from "axios"

const currentLocation = async () => {
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
                    const { latitude,longitude} = position.coords;
                    console.log(position.coords)
                    resolve({
                        latitude,
                        longitude
                    })
                },
                (err)=>{
                    reject({
                        err
                    })
                },{
                    timeout: 5000,
                    maximumAge: 0
                })
        }
    })
}


const currentWeather = async (lat, lng) => {

    const apikey = import.meta.env.VITE_OPENWEATHER_KEY;
    
    const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
    )

    return respuesta;
}



export const resolveCurrentWeather = async () => {

    try {
        const { latitude, longitude } = await currentLocation();
        const {data} = await currentWeather(latitude, longitude);
        const clima = {
            description: data.weather[0].description,
            img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: data.main.temp,
            placeName: data.name
        }
        
        return clima
    }
    catch (err) {
        console.log(err)
    }

}

