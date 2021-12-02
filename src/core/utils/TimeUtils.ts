import moment from 'moment';

/**
 * @class
 * Utility class for time functions
 */
export class TimeUtils {

	/**
	 * @method
	 * @static
	 * @public
	 * Time Utils - time string check that there is a valid time string with a mandatoru leading zero
	 * @param {string} timeString The string to check
	 * @returns {boolean} returns true for a valid time string, false if not.
	 */
	public static timeStringIsValid = (timeString: string): boolean => {
		return (/(^[01]\d|2[0123]):(?:[012345]\d)/gmi).test(timeString);
	}

	/**
	 * @method
	 * @static
	 * @public
	 * Return the month as an integer
	 * @param {string} monthName The month name
	 * @returns {number} the month number
	 */
	public static monthAsInt = (monthName: string): number => {
		return new Date(Date.parse(monthName + ' 1, 2012')).getMonth() + 1;
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Return the month as an integer
	 * @param {string} monthName The month name
	 * @returns {number} the month number with leading zero
	 */
	public static monthNameAsNumberWithLeadingZero = (monthName: string): string => {
		const monthNumber: number = TimeUtils.monthAsInt(monthName);
		return (monthNumber < 10) ? '0' + monthNumber.toString() : monthNumber.toString();
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Return the moment as a human readable date
	 * @param {moment.Moment} dateTime The moment date time to process
	 * @returns {string} the date in human readable form
	 */
	public static momentAsHumanDate = (dateTime: moment.Moment): string => {
		return TimeUtils.momentDateAsString(dateTime);
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Turn the date and time into a moment object
	 * @param {string} dateString The date string component
	 * @param {string} timeString The time string component
	 * @returns {moment.Moment} the date time initialised moment
	 */
	public static stringDateAndTimeToMoment = (dateTimeString: string): moment.Moment => {
		let momentDate = moment(dateTimeString, 'DD-MM-YYYY HH:mm');
		if (! momentDate.isValid()) {
			momentDate = moment(dateTimeString, 'DD-MMM-YYYY HH:mm');
		}
		return momentDate;
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Turn the date and time into a moment object
	 * @param {string} dateString The date string component
	 * @param {string} timeString The time string component
	 * @returns {moment.Moment} the date time initialised moment
	 */
	public static stringDateTimeToMoment = (dateString: string, timeString: string): moment.Moment => {
		const dateTimeString = dateString + ' ' + timeString;
		return TimeUtils.stringDateAndTimeToMoment(dateTimeString);
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Turn the date string to a moment object
	 * @param {string} dateString The date string component
	 * @returns {moment.Moment} the date initialised moment
	 */
	public static stringDateToMoment = (dateString: string): moment.Moment => {
		let momentDate = moment(dateString, 'DD-MM-YYYY');
		if (! momentDate.isValid()) {
			momentDate = moment(dateString, 'DD-MMM-YYYY');
		}
		return momentDate;
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Return the moment as a formatted date string
	 * @param {moment.Moment} date The date moment object
	 * @returns {string} the formatted date string
	 */
	public static momentDateAsString = (date: moment.Moment): string => {
		return date.format('dddd, MMMM D YYYY');
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Return the moment as a formatted time string
	 * @param {moment.Moment} date The date moment object
	 * @returns {string} the time string
	 */
	public static momentTimeAsString = (date: moment.Moment): string => {
		return date.format('HH:mm');
	};

	/**
	 * @method
	 * @static
	 * @public
	 * Check that the time string is in the correct format fixing as necessary
	 * @param {string} time The time string
	 * @returns {string} the cleaned time string
	 */
	public static timeCheck = (time: string): string => {
		let timeParts: string[] = time.split(':');
		if (timeParts.length !== 2) {
			timeParts = time.split(' ');
		}
		if (timeParts[0].length === 1) {
			timeParts[0] = '0' + timeParts[0];
		}
		if (timeParts[1].length === 1) {
			timeParts[1] = '0' + timeParts[1];
		}
		return timeParts[0] + ':' + timeParts[1];
	}

	/**
	 * @method
	 * @static
	 * @public
	 * calculate in human form how long since / to the date
	 * @param {moment} date The date to compare
	 * @returns {string} text representation of the time
	 */
	public static calculateHowLong = (date: moment.Moment): string => {
		const isPast = date.isBefore(moment());
		const howLongSeconds = Math.abs(moment().diff(date, 'seconds'));
		const howLongMinutes = Math.abs(moment().diff(date, 'minutes'));
		const howLongHours = Math.abs(moment().diff(date, 'hours'));
		const howLongDays = Math.abs(moment().diff(date, 'days'));
		const howLongWeeks = Math.abs(moment().diff(date, 'weeks'));
		const howLongMonths = Math.abs(moment().diff(date, 'months'));
		const howLongYears = Math.abs(moment().diff(date, 'years'));
		if (howLongSeconds < 60) {
			return 'just now';
		} else if (howLongMinutes < 60) {
	  		if (howLongMinutes === 1) {
	  			return (isPast) ? '1 minute ago' : '1 minute';
	  		} else {
	  			return (isPast) ? howLongMinutes + ' minutes ago' : 'in ' + howLongMinutes + ' minutes';
	  		}
		} else if (howLongHours < 24) {
		  	if (howLongHours === 1) {
		  		return (isPast) ? '1 hour ago' : '1 hour';
		  	} else {
		  		return (isPast) ? howLongHours + ' hour ago' : 'in ' + howLongHours + ' hour';
		  	}
		} else if (howLongDays < 7) {
			if (howLongDays === 1) {
				return (isPast) ? 'Yesterday' : 'Tomorrow';
			} else {
				return (isPast) ? howLongDays + ' days ago' : 'in ' + howLongDays + ' days';
			}
	  	} else if (howLongWeeks < 4) {
	  		if (howLongWeeks === 1) {
				return (isPast) ? 'Last Week' : 'Next Week';
			} else {
				return (isPast) ? howLongWeeks + ' weeks ago' : 'in ' + howLongWeeks + ' weeks';
			}
	  	} else if (howLongMonths < 12) {
	  		if (howLongMonths === 1) {
	  			return (isPast) ? 'Last Month' : 'Next Month';
	  		} else {
	  			return (isPast) ? howLongMonths + ' months ago' : 'in ' + howLongMonths + ' months';
	  		}
	  	} else if (howLongMonths <= 12) {
	  		return (isPast) ? 'Last Year' : 'Next Year';
	  	} else {
	  		return (isPast) ? howLongYears + ' years ago' : 'in ' + howLongYears + ' years';
	  	}
	}
}
