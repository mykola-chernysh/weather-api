import { ApiError } from "../errors/api.error";
import { weatherCurrentRepository } from "../repositories/weather.current.repository";
import { IQuery } from "../types/query.type";
import { IWeatherResponse } from "../types/weather.response.type";

class WeatherCurrentService {
  public async getCurrentWeather(query: IQuery): Promise<IWeatherResponse> {
    if (query.name) {
      return await weatherCurrentRepository.getWeatherByName(query.name);
    }

    if (query.lat && query.lon) {
      return await weatherCurrentRepository.getWeatherByCoord(query.lat, query.lon);
    }
  }
}

export const weatherCurrentService = new WeatherCurrentService();
