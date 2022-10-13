import { getWeather } from "./clima";
import { getLocalCoords } from "./coordenadas";

export const resolveLocalWeather = async () => {

    try {
        const { latitude: lat, longitude: lon } = await getLocalCoords();
        const data = await getWeather(lat, lon);
        return data;
    }
    catch( err){
        console.log(err)
    }
    
}
