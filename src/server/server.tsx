import * as path from "path";
import * as express from "express";
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import * as fs from 'fs';
import App from '../client/ts/App';
import logger from "./log";

const app = express();
const router = express.Router();

router.get("/api", (req, res) => {
    res.json(null);
});

router.get("*", (req, res) => {
    // res.sendFile(path.resolve(__dirname + "/../client/index.html"));

    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve(__dirname + "/../client/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
            logger.error("Could not read 'index.html':", err);
            return res.sendStatus(500);
        }

        return res.send(
            data.replace(`<div id="root\"></div>`, `<div id="root">${app}</div>`)
        );
    });
});

// Use JSON for API requests
app.use(express.json());
// Store all HTML, JS and CSS files in client folder.
app.use(express.static(path.resolve(__dirname + "/../client")));
// Add the router
app.use("/", router);

app.listen(process.env.PORT || 8080, () => logger.info(`Listening on port ${process.env.PORT || 8080}!`));
