import * as express from "express";
import logger from "./log";

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 8080, () => logger.info(`Listening on port ${process.env.PORT || 8080}!`));
