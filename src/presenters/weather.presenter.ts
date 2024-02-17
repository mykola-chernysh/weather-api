import { IWeatherResponse } from "../types/weather.response.type";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeatherResponse) {
    return {
      lon: weather.coord.lon,
      lat: weather.coord.lat,
      weather_params: weather.weather[0].main,
      weather_desc: weather.weather[0].description,
      icon: weather.weather[0].icon,
      temp: weather.main.temp,
      feels_like: weather.main.feels_like,
      temp_min: weather.main.temp_min,
      temp_max: weather.main.temp_max,
      pressure: weather.main.pressure,
      humidity: weather.main.humidity,
      visibility: weather.visibility,
      wind_speed: weather.wind.speed,
      wind_deg: weather.wind.deg,
      wind_gust: weather.wind.gust,
      clouds: weather.clouds.all,
      city_name: weather.name,
    };
  }
}
