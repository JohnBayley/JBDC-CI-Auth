import logger from '../core/logger/Log';
import startupLogger from '../core/logger/StartupLog';
import { IRestController } from '../restControllers/IRestController';
import { Configuration } from './config/Configuration';

import morgan = require('morgan');
import cors = require('cors');
import express = require('express');
import bodyParser = require('body-parser');

/**
 *
 * Create an Express Application instance.
 * @class
 *
 */
export class App {

	/** @var {express.Application} app The express app instance  */
	public app : express.Application;

	/** @var { number } port The port that the app will listen on */
	public port : number;

	/**
	 *
	 * @param { IRestController[] } controllers array The controllers to use to generate endpoints.
	 * @param port
	 */
	constructor(controllers: IRestController[], port: number) {
		this.app = express();
		this.port = port;
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	/**
	 * @method
	 * Initialise any Express middleware items that we use for the app operation.
	 */
	private initializeMiddlewares = (): void => {
		this.app.use(cors());
		// Enable the body parser for json output
		this.app.use(bodyParser.json());


		// Logging of http requests
		// This is now configured to use morgan streaming to the logHttpRequest below to allow environment switching of logs
		this.app.use(morgan('combined', { stream: { write: message => this.logHttpRequest(message) }}));
	}

	/**
	 * @method
	 * This method uses the configuration environment to output or ignore the log stream for morgan
	 * If set to development then the output is passed to winston logger as an info log.
	 * @param { string } message  The message stream to log.
	 */
	private logHttpRequest = (message: string): void => {

		const loggingHttpRequests = Configuration.NODE_ENV === 'development';
		if (loggingHttpRequests) {
			logger.info(message);
		}
	}

	/**
	 * @method
	 * This method initialises and instantiates all the defined rest controllers
	 * @param { IRestController[] } controllers  Array of rest controllers to initialise.
	 */
	private initializeControllers = (controllers: IRestController[]): void => {
		controllers.forEach((controller: IRestController) => {
			this.app.use('/', controller.router);
		});

	}

	/**
	 * @method
	 * This method tells the app to listen on the defined port for incomming http requests..
	 */
	public listen = (): void =>  {
		this.app.listen(this.port, () => {
			startupLogger.startup('App.listen: App listening on port %d', this.port);
		});
	}
}