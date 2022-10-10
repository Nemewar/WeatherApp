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


const todayWeather = async (lat, lng) => {

    const apikey = import.meta.env.VITE_OPENWEATHER_KEY;

    const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
    )
    return respuesta;
}

export const forecastWeather = async (lat, lng) => {

    const apikey = import.meta.env.VITE_OPENWEATHER_KEY;

    const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apikey}`
    )


    return respuesta
}



export const resolveTodayWeather = async () => {

    try {
        const { latitude, longitude } = await currentLocation();
        const { data } = await todayWeather(latitude, longitude);
        const clima = {
            description: data.weather[0].description,
            img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: data.main.temp,
            placeName: data.name,
            latitude,
            longitude
        }
        
        return clima
    }
    catch (err) {
        console.log(err)
    }

}

export const resolveForecastWeather = async (latitude,longitude) => {
    try{
        const {data} = await forecastWeather(latitude,longitude);
        let indices = [7,16,23,31,39];
        const listForeCast = data.list.filter( (i,index)=>{

            if(indices.includes(index)){

                return i;
            }
        })
        return listForeCast;
    }
    catch(err){
        console.log(err)
    }
}

