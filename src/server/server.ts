import * as express from "express";
import logger from "./log";

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) => res.send({ username: "ttous" }));

app.listen(process.env.PORT || 8080, () => logger.info(`Listening on port ${process.env.PORT || 8080}!`));
