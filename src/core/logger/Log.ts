import winston from 'winston';

import { Configuration } from '../config/Configuration';

/**
 * @class
 * The logger class for handling app logging
 */

/** @var {winston.LoggerOptions} */
const logger: winston.Logger = winston.createLogger({
	level: Configuration.LOGLEVEL,
	format: winston.format.combine(
		winston.format.splat(),
		winston.format.simple()
	),
	transports: [
		//
		// - Write to all logs with level `info` and below to `combined.log`
		// - Write all logs error (and below) to `error.log`.
		//

	]
});

// This section controls how the logging will be handled depending upon the environment.
if (process.env.NODE_ENV === 'production') {
	// Production format logging. Removed any colourising and formatted to JSON
	// NB> As we are not logging centrally yet JSON log is commented out
	logger.add(
		new winston.transports.Console(
			{
				format: winston.format.combine(
					winston.format.timestamp({
						format: 'YYYY-MM-DD HH:mm:ss'
					}),
					winston.format.printf(logMessage => `${logMessage.timestamp} ${logMessage.level}: ${logMessage.message}`),
					// winston.format.json() // Log to json format for prodution central logging
				)
			}
		)
	);
} else {
	// Production format logging. Colourised console output
	logger.add(
		new winston.transports.Console(
			{
				format: winston.format.combine(
					winston.format.colorize(),
					winston.format.timestamp({
						format: 'YYYY-MM-DD HH:mm:ss'
					}),
					winston.format.printf(logMessage => `${logMessage.timestamp} ${logMessage.level}: ${logMessage.message}`)
				)
			}
		)
	);
}

export default logger;