import server from './config/server';
// Loading the API.
require('./config/database')
require('./config/routes')(server)