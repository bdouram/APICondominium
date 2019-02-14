import server from './config/server';
import databaseConfig from './config/database';
import routerConfig from './config/routes';

// Loading the API.
databaseConfig();
routerConfig(server);