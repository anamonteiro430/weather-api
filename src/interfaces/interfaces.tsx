
export interface WeatherResponse {
    country: string,
    city: string,
    sunrise: number,
    sunset: number,
    weather: Weather,
}

export interface Weather {
    temperature: number,
    temperature_feels_like: number,
    title: string,
    description: string
    icon: string
}