export const resolveCurrentWeather = async (currentLocation, currentWeather) => {

    try {
        const { latitude, longitude } = await currentLocation();
        const {data} = await currentWeather(latitude, longitude);
        const clima = {
            description: data.weather[0].description,
            temp: data.main.temp
        }
        
        return clima
    }
    catch (err) {
        console.log(err)
    }

}