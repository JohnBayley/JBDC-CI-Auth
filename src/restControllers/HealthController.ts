import * as express from 'express';

import { Configuration } from '../core/config/Configuration';
import startupLogger from '../core/logger/StartupLog';
import { IRestController } from './IRestController';

/**
 *
 * Utilitise for connecting to the AWS Dynamo Database and retreiving data.
 * @class
 *
 */
export class HealthController implements IRestController {

	/** @var {string} path  The base url for this controller */
	public path = Configuration.BASE_URI + '/';

	/** @var {express.Router} router  The express router reference */
	public router : express.Router = express.Router();

	/**
	 * @constructor
	 */
	constructor() {
		this.intializeRoutes();
	}

	/**
	 * @method
	 * @public
	 * Initialise the routes for this controller.
	 */
	public intializeRoutes() {
		this.router.get(this.path + 'health', this.basicHealth);
		startupLogger.startup('Configured GET endpoint ' + this.path + 'health');
	}

	/**
	 * @method
	 * @public
	 * Return a 200 OK status for basic health.
	 * @param {express.Request} req Express request data
	 * @param {express.Response} res Express response data
	 */
	private basicHealth = (_req: express.Request, res: express.Response): void => {
		res.send('Healthy');
	}
}
