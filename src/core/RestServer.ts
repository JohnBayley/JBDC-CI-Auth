
import { Configuration } from '../core/config/Configuration';
import { WebHookController } from '../restControllers/WebHookController';
import { HealthController } from '../restControllers/HealthController';
import { App } from './App';

/**
 *
 * Create a rest eserver to instantiate the endpoints and handle data and app requests and storage.
 * @class
 *
 */
export class RestServer {
	/** @var @static {App} server A reference to the express application. */
	public static server : App;

	/**
	 * @method
	 * @static
	 * Initialise the server and any components.
	 * @returns { Promise<void> } void Promise used to allow integration with any async components.
	 */
	public static init = (): void => {
		// Instantiate the app passing in the rest controllers
		RestServer.server = new App(
			[
				new WebHookController(),
				new HealthController()
			],
			Configuration.SERVER_PORT,
		);
	}

	/**
	 * @method
	 * @static
	 * Start the rest service App webservice and listen for any requests.
	 */
	public static listen = (): void => {
		RestServer.server.listen();
	}
}
