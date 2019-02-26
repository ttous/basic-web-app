import * as express from "express";
import * as path from "path";
import logger from "./log";

const app = express();
const router = express.Router();

router.get("/api", (req, res) => {
    res.json(null);
});

router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../client/index.html"));
});

// Use JSON for API requests
app.use(express.json());
// Store all HTML, JS and CSS files in client folder.
app.use(express.static(path.resolve(__dirname + "/../client")));
// Add the router
app.use("/", router);

app.listen(process.env.PORT || 8080, () => logger.info(`Listening on port ${process.env.PORT || 8080}!`));
