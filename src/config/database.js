import mongoose from 'mongoose'; 
import ENV from '../.env';
import { errors } from '../constants';
 
/*
  Configuring the mongoose errors and setting database config.
*/

const config = () => {
    const configuredDatabase = mongoose;
    configuredDatabase.Promise = global.Promise;
    configuredDatabase.Error.messages.general.required = errors.required;
    configuredDatabase.Error.messages.Number.min = errors.min;
    configuredDatabase.Error.messages.Number.max = errors.max;
    configuredDatabase.connect(`mongodb://${ENV.hostDatabase}/${ENV.database}`, { useNewUrlParser: true });
    return configuredDatabase;
};

const connection = config();

export default connection;