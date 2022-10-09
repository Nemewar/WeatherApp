import axios from "axios"


export const currentWeather = async (lat, lng) => {

    const apikey = import.meta.env.VITE_OPENWEATHER_KEY;
    
    const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
    )

    return respuesta;
}