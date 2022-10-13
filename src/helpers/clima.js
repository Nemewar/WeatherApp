import axios from "axios"
// https://openweathermap.org/api/one-call-3
// transforma dt a horario local -> https://www.unixtimestamp.com/
const myParams = (lat, lon) => {
    return {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: import.meta.env.VITE_OPENWEATHER_KEY
    }
}


export const getWeather = async (lat, lon) => {

    try {
        const instance = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.8/onecall`,
            params: myParams(lat, lon)
        })

        let { data : {daily,current} } = await instance.get();

        current = {
            temp: current.temp,
            pressure: current.pressure,
            humidity: current.humidity,
            visibility: current.visibility,
            wind: current.wind_speed,
            description: current.weather[0].description,
            img: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
        }


        daily = daily.filter( (day,index) => index>=1 && index<=5).map( day => {
            return {
                temp: day.temp.day,//ver documentacion al parecer es temperatura del medio dia
                img: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                dt: day.dt
            }
        })

        return {
            coords: {
                lat,
                lon
            }
            ,
            daily,
            current
        }

    }catch(err){
        console.log(err)
    }
    


}