import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters/weather.presenter";
import { weatherCurrentService } from "../services/weather.current.service";
import { IQuery } from "../types/query.type";

class WeatherCurrentController {
  public async getCurrentWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.res.locals.queryParams as IQuery;

      const currentWeather = await weatherCurrentService.getCurrentWeather(query);

      return res.json({ data: WeatherPresenter.weatherToResponse(currentWeather) });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherCurrentController = new WeatherCurrentController();
