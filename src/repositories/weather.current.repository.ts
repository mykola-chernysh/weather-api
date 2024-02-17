import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { ICityResponse } from "../types/city.response.type";
import { IWeatherResponse } from "../types/weather.response.type";

class WeatherCurrentRepository {
  public async getWeatherByName(cityName: string): Promise<IWeatherResponse> {
    const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${configs.API_KEY}`;
    const responseCity = (await fetch(cityUrl).then((value) => value.json())) as ICityResponse[];

    if (!responseCity.length) {
      throw new ApiError("City not found", 404);
    }

    const { lat, lon } = responseCity[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${configs.API_KEY}`;
    return (await fetch(weatherUrl).then((value) => value.json())) as IWeatherResponse;
  }

  public async getWeatherByCoord(lat: string, lon: string): Promise<IWeatherResponse> {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${configs.API_KEY}`;
    return (await fetch(weatherUrl).then((value) => value.json())) as IWeatherResponse;
  }
}

export const weatherCurrentRepository = new WeatherCurrentRepository();
