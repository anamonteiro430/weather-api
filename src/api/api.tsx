import { WeatherResponse } from "../interfaces/interfaces";
import { API_KEY } from "./../functions";

export const getWeatherDataForCity = (
  city: string
): Promise<WeatherResponse | null> => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then((result) => {
      return result.json().then((data) => {
        return {
          city: data.name,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          weather: {
            temperature: data.main.temp,
            temperature_feels_like: data.main.feels_like,
            title: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          },
        };
      });
    })
    .catch(() => {
      return null;
    });
};
