
/**
 *
 * Common tools for working with strings.
 * @class
 *
 */
export class StringUtils {
	/**
	 * @method
	 * @static
	 * @public
	 * Remove any characters that can cause probles with filenames replacing them with a dash.
	 * @param {string} rawString string to be cleaned up.
	 * @returns {string} returns a string with all illegal characters removed
	 */
	public static filenameCleanString = (rawString: string): string => {
		let cleanName = rawString.replace(/\&/gi, '-');
		cleanName = cleanName.replace(/\(/gi, '-');
		cleanName = cleanName.replace(/\)/gi, '-');
		cleanName = cleanName.replace(/\s/gi, '-');
		cleanName = cleanName.replace(/\//gi, '-');
		cleanName = cleanName.replace(/\\/gi, '-');
		cleanName = cleanName.replace(/[^0-9a-z_-]/gi, '');
		return cleanName;
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Remove any space characters and lowecase the string.
	 * @param {string} rawString string to be cleaned up.
	 * @returns {string} returns a LOWERCASE string with space characters removed
	 */
	public static removeSpaceAndMakeLowercase = (rawString: string): string => {
		return rawString.toLowerCase().replace(/\s+/g, '');
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Remove any space characters and lowecase the string.
	 * @param {string} rawString string to be cleaned up.
	 * @returns {string} returns a UPPERCASE string with space characters removed
	 */
	public static removeSpaceAndMakeUppercase = (rawString: string): string => {
		return rawString.toUpperCase().replace(/\s+/g, '');
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Remove any space characters and lowecase the string.
	 * @param {string} postcode string to be cleaned up.
	 * @returns {string} returns a lowercase postcode with space characters removed
	 */
	public static postcodeString = (postcode: string): string => {
		return StringUtils.removeSpaceAndMakeUppercase(postcode);
	}


	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an uppercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any uppercase character
	 */
	public static containsUppercase = (checkString: string): boolean => {
		return (checkString && (/[A-Z]/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an lowercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any lowercase character
	 */
	public static containsLowercase = (checkString: string): boolean => {
		return (checkString && (/[a-z]/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a number character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any numeric character
	 */
	public static containsNumeric = (checkString: string): boolean => {
		return (checkString && (/[0-9]/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a non alpha numeric character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any special character
	 */
	public static containsSpecial = (checkString: string): boolean => {
		return (checkString && (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a minimum of characters depending on the morethan value.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains a character lenght between 8-20
	 */
	public static stringLengthMoreThan = (checkString: string, moreThan: number): boolean => {
		return (checkString && checkString.length >= moreThan);
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a number character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any numeric character
	 */
	public static containsNumbersOnly = (checkString: string): boolean => {
		return (checkString && (/^[0-9]+$/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a number character and if not remove it .
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains numeric characters only
	 */
	public static allowNumbersOnly = (checkString: string): string => {
		return (checkString && checkString.replace(/[^0-9]/gi, ''));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains a number character and if not remove it .
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains numeric characters only
	 */
	public static allowLettersOnly = (checkString: string): string => {
		return (checkString && checkString.replace(/[^a-zA-Z-]/gi, ''));
	}


	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an lowercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any lowercase character
	 */
	public static checkPasswordValidation = (checkString: string): boolean => {
		return StringUtils.containsLowercase(checkString) &&
		StringUtils.containsUppercase(checkString) &&
		StringUtils.containsNumeric(checkString) &&
		StringUtils.containsSpecial(checkString) &&
		StringUtils.stringLengthMoreThan(checkString, 8);
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an lowercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any lowercase character
	 */
	public static emailFormat = (checkString: string): boolean => {
		return (checkString && (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z.-_]/.test(checkString)));
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an lowercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any lowercase character
	 */
	public static isValidPassword = (checkString: string): boolean => {
		return StringUtils.checkPasswordValidation(checkString);
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Check to see if the string contains an lowercase character.
	 * @param {string} checkString the string to test against
	 * @returns {boolean} returns true if the string contains any lowercase character
	 */
	public static isValidEmail = (checkString: string): boolean => {
		return StringUtils.emailFormat(checkString);
	}
}
