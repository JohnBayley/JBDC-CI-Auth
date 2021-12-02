import * as express from 'express';

import { Configuration } from '../core/config/Configuration';
import logger from '../core/logger/Log';
import startupLogger from '../core/logger/StartupLog';
import { IRestController } from './IRestController';


/**
 *
 * Utilitise for connecting to the AWS Dynamo Database and retreiving data.
 * @class
 *
 */
export class WebHookController implements IRestController {

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
		this.router.post(this.path + 'webHook', this.onWebhook);
		startupLogger.startup('Configured POST endpoint ' + this.path + 'webHook');
	}

	/**
	 * @method
	 * @private
	 * Return a 200 OK status.
	 * @param {express.Request} req Express request data
	 * @param {express.Response} res Express response data
	 * @returns {Promise<void>} Returns an empty promise
	 */
	private onWebhook = async (req: express.Request, res: express.Response): Promise<void> => {
			logger.info('Request: %o', req.body);
			return Promise.resolve();
	}

}
