import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import {IQuery} from "../types/query.type";

class WeatherCurrentMiddleware {
  public isQueryParams(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as IQuery;

      if (!Object.keys(query).length) {
        throw new ApiError("Incorrectly entered search data!", 400);
      }

      if (query.name && query.lat && query.lon) {
        throw new ApiError("Incorrectly entered search data!", 400);
      }

      if (query.name && (query.lat || query.lon)) {
        throw new ApiError("Incorrectly entered search data!", 400);
      }

      if ((query.lon && !query.lat) || (!query.lon && query.lat)) {
        throw new ApiError("Incorrectly entered search data!", 400);
      }

      req.res.locals.queryParams = query;

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const weatherCurrentMiddleware = new WeatherCurrentMiddleware();
