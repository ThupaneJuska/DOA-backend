import { getConnection } from '../../../typeormUtils';

/**
 * Generic functions to execute raw sql queries.
 */
export class GenericRDBMSOperations {
    executeSQL(connectionName, query, params) {
        if (!connectionName) {
            throw new Error('connectionName is mandatory');
        }
        return getConnection(connectionName).query(query, params);
    }
}
