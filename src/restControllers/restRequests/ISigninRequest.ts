/**
 * The sign in request interface
 * @interface
 */

export interface ISigninRequest {

	/** @var {string} username The username / email to match the account with */
	username : string;

	/** @var {string} password The password to verify the account with */
	password : string;

	/** @var {string} confirmation_code The confirmation code to verify the email address with */
	confirmation_code? : string;
}