import axios from 'axios'
import { WeatherResponse } from '../interfaces/interfaces'
import { API_KEY } from './../functions'

export const getWeatherDataForCity = (city: string, isCelsius: boolean): Promise<WeatherResponse | null> => {
    const units = isCelsius ? "metric" : "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    return axios.get(url).then(({data}) => {        
        return {
            city: data.name,
            country: data.sys.country,
            sunrise:  data.sys.sunrise,
            sunset: data.sys.sunset,
            weather: {
                temperature: data.main.temp,
                temperature_feels_like:  data.main.feels_like,
                title: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            }
        }
    }).catch((err) =>{ return null})
}