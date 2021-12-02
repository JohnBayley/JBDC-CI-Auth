import Handlebars from 'handlebars';

/**
 * @class
 * Utility class for extending handlebars functionality
 */
export class HandlebarUtils {

	/**
	 * @method
	 * @static
	 * @public
	 * Register the handlebars helper functions
	 */
	public static registerHelpers = (): void => {
		HandlebarUtils.registerCheckUtil();
	}
	/**
	 * @method
	 * @static
	 * @public
	 * Handlebars check function to return true if the element exists and is not empty
	 */
	private static registerCheckUtil = (): void => {
		Handlebars.registerHelper('check', (value) => {
			return (value !== null && value !== '');
		});
	}
}