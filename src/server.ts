
import { AppData } from './core/appData/AppData';
import { Database } from './core/database/Database';
import startLogger from './core/logger/StartupLog';
import { RestServer } from './core/RestServer';

/**
 *
 * Bootstrap the Application service.
 * @class
 *
 */
startLogger.startup('DeploymentServer: Rest Service Starting');

const init = async (): Promise<void> => {
	Database.init();
	AppData.init();
	RestServer.init();
	RestServer.listen();
};

init();