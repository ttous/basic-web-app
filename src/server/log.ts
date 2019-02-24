import * as moment from "moment";
import * as pino from "pino";

const TIME_FORMAT: string = "YYYY-MM-DDTHH:mm:ss.SSSSZ";

const logger = pino({
    prettyPrint: process.env.NODE_ENV === "production" ? false : { colorize: true, crlf: true },
    timestamp: () => `,"time":"${moment().format(TIME_FORMAT)}"`,
    useLevelLabels: true
});

export default logger;
