
require('dotenv').config();

/**
 *
 * Configuration parameters for the project..
 * @class
 */

export class Configuration {

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} VERSION  The version text etc
	 */
	public static VERSION = '1.0.0';

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} NODE_ENV  The environment that the service is running on to control logging etc
	 */
	public static NODE_ENV : string 		= process.env.NODE_ENV || 'development';

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} LOGLEVEL The loglevel of the app.
	 */
	public static LOGLEVEL					= process.env.LOGLEVEL 					|| 'info';

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} SERVER_PORT The port number that ths app should run on
	 */
	public static SERVER_PORT : number		= parseInt(process.env.SERVER_PORT)		|| 3000;

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} SECURE_MODE The port number that ths app should run on
	 */
	public static SECURE_MODE : string		= process.env.SECURE_MODE				|| 'true';

	/**
	 * @var
	 * @method
	 * @public
	 * @static
	 * @returns {string} BASE_URI The domain name of the server that this process is running on
	 */
	public static BASE_URI 					= '/webhook';

}