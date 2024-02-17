import express, { NextFunction, Request, Response } from "express";
import * as swaggerUi from "swagger-ui-express";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { weatherRouter } from "./routers/weather.current.router";
import * as swaggerDocument from "./utils/swagger.json";

const app = express();

app.use("/weather", weatherRouter);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("*", (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err?.status || 500).json({
    message: err?.message,
    status: err?.status,
  });
});

const port = configs.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
