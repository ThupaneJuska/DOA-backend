import * as configNodes from './config/configNodes';
import { DataSource } from 'typeorm';
import log from './utils/Logger';

export const createConnection = async (key, dbOption) => {
    const dataSource = new DataSource(dbOption);
    let connection = await dataSource.initialize();
    connectionMap.set(key, connection);
    log.debug(`[DBConnection] Datasource initialized for :: ${key}`)
};

export const getConnection = key => {
    const dataSource = connectionMap.get(key);
    if (!dataSource) {
        throw new Error(`[DBConnection] Data source not initialized for::${key}`)
    }
    return dataSource;
};

const connectionMap = new Map<string, DataSource>();
