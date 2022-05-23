export const API_KEY = process.env.REACT_APP_API_KEY;

export const baseColor = "#F5EFEF";
export const accentColor = "#132A40";

export enum WeatherUnits {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
}

export const convertToUnit = (degrees: number, unit: WeatherUnits) => {
  if (unit === WeatherUnits.CELSIUS) {
    return (degrees - 32) / 1.8;
  }
  return degrees * 1.8 + 32;
};

export const getTime = (unix: number) => {
  const date = new Date(unix * 1000);

  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}H`;
};
