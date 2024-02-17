import { Router } from "express";

import { weatherCurrentController } from "../controllers/weather.current.controller";
import { weatherCurrentMiddleware } from "../middlewares/weather.current.middleware";

const router = Router();

router.get("", weatherCurrentMiddleware.isQueryParams, weatherCurrentController.getCurrentWeather);

export const weatherRouter = router;
