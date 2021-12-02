import * as express from 'express';

/**
 *
 * Interface defining the fingerprint of any RestControllers.
 * @class
 *
 */
export interface IRestController {

	/** @var {string} path  The base url for this controller */
	path : string;

	/** @var {express.Router} router  The express router reference */
	router : express.Router;

	/**
	 * @method
	 * @public
	 * Initialise the routes for this controller.
	 */
	intializeRoutes : () => void;
}