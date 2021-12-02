import fs from 'fs';
import path from 'path';

/**
 * @class
 * Utilities for working with templates within the app
 */
export class TemplateUtils {

	/**
	 * @method
	 * @public
	 * @static
	 * Read in the requested page file and return it
	 * @param {string} page The requested page
	 * @param {express.Response} res Express response data
	 * @returns {Promise<string>} Returns a promise containing the file content
	 */
	public static readFile = (page: string): Promise<string> => {
		const filePath = path.join(path.resolve(__dirname, '../../../pages/' + page));
		return new Promise((resolve, reject): void => {
			fs.readFile(filePath, {encoding: 'utf-8'}, (error: Error, data: string): void => {
				if (!error) {
					resolve(data);
				} else {
					reject(error);
				}
			});
		});
	}
}