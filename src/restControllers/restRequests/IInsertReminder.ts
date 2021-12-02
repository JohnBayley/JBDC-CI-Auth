/**
 * Interface to define the add reminder object that is used for new reminders
 * @interface
 */

export interface IInsertReminder {

	/** @var {string} add_reminder_date the reminder date */
	reminder_date : string;

	/** @var {string} reminder_description the reminder description */
	reminder_description : string;

	/** @var {number} reminder_period the reminder period */
	reminder_period : number;

	/** @var {string} reminder_notes the reminder notes */
	reminder_notes : string;

	/** @var {string} reminder_time the reminder time */
	reminder_time : string;

	/** @var {number} user_id the user id of the logged in user submitting the reminder */
	user_id : number;
}