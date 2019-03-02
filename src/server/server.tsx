import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../client/scripts/App";
import logger from "./log";

const server = express();
const router = express.Router();
router.get("/api", (req, res) => {
    res.json(null);
});

router.get("*", (req, res) => {
    const context = {} as any;
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve(__dirname + "/../client/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            logger.error("Could not read \"index.html\":", err);
            return res.sendStatus(500);
        }

        if (context.status === 404) {
          res.status(404);
        }

        return res.send(
            data.replace("<div id=\"root\"></div>", `<div id="root">${app}</div>`)
        );
    });
});

// Store all HTML, JS and CSS files in client folder
server.use(express.static(path.resolve(__dirname + "/../client")));
// Add the router
server.use("/", router);

server.listen(process.env.PORT || 8080, () => logger.info(`Listening on port ${process.env.PORT || 8080}!`));
