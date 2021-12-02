import winston from 'winston';

const startupLogLevel: winston.config.AbstractConfigSetLevels = {
	startup: 0,
	error: 0
};

const startupLogLevelColours: winston.config.AbstractConfigSetColors = {
	startup: 'yellow',
	error: 'red'
};
winston.addColors(startupLogLevelColours);
const startupLogger: any = winston.createLogger({
	levels: startupLogLevel,
	format: winston.format.combine(
		winston.format.splat(),
		winston.format.simple()
	),
	transports: [
		new winston.transports.Console({
			level: 'startup',
			format: winston.format.combine(
				winston.format.colorize({ all: true}),
				winston.format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				winston.format.printf(logMessage => `${logMessage.timestamp} ${logMessage.level}: ${logMessage.message}`),
				// winston.format.json() // Log to json format for prodution central logging
			)
		})
	]
});

export default startupLogger;