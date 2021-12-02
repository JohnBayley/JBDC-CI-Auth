/**
 * Creates the data interface that will be sent to reset the password
 * @interface
 */
export interface IPasswordResetRequest {

	/** @var {string} email The email to reset the password for */
	email : string;


	/** @var {string} password The new password */
	password : string;

	/** @var {string} confirmPasword The new password confirmation */
	confirmPasword : string;

	/** @var {string} confirmationCode The confirmation code to verify the change */
	confirmationCode : string;
}