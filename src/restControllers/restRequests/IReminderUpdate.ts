export interface IReminderUpdate {
	reminder_id : number;
	user_id : number;
	reminder_date? : string;
	description? : string;
	period? : number;
	notes? : string;
	parent_id? : number;
	reminder_enabled? : boolean;
	reminder_archived? : boolean;
	reminder_time? : string;
}