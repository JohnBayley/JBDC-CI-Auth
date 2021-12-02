import logger from '../logger/Log';

/**
 * @class
 * Database service
 */
export class Database {


	/** @method
	 * Initialise the connection to the database
	 * @returns {Promise<void>} returns an emptu promise.
	 */
	public static init = (): void => {
		logger.info('Database.init : Initialising data');
	}
}