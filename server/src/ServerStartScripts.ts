import * as configNodes from './config/configNodes';
//append_imports_start

import { MongoConnections } from './utils/ndefault-mongodb/Mongodb/MongoConnections'; //_splitter_
import { sessionObject } from './entity/ndefault-session/Session/Session'; //_splitter_
import { LoggerTypeorm } from './utils/ndefault-sql/ExecuteSql/LoggerTypeorm'; //_splitter_
import * as log from './utils/Logger'; //_splitter_
import { createConnection } from './typeormUtils'; //_splitter_
import { sep } from 'path'; //_splitter_
//append_imports_end
export let StartScripts = [
  //appendnew_flow

  //__start__script__ndefault-sql
  async () => {
    const dbConfig = configNodes.default['db-config'];
    if (!dbConfig) {
      return;
    }
    const isValidDbConfig = (dbConf) =>
      dbConf?.dbOption &&
      !(typeof dbConf.disabledb === 'boolean' && dbConf.disabledb) &&
      dbConf.dbOption.type !== 'mongodb';
    const ormConfig: any[] = Object.values(dbConfig)
      .filter(isValidDbConfig)
      .map((dbConf: any) => {
        const { dbOption, erdPath } = dbConf;
        if (!erdPath) {
          log.default.info('ERD relative path not found.');
          log.default.info('ERD entities will be ignored.');
        }
        if (typeof dbOption.port === 'string') {
          dbOption.port = parseInt(dbOption.port);
        }
        dbOption.entities = erdPath
          ? [`${__dirname + sep}entities${sep}${erdPath}/*{.ts,.js}`].concat(
              sessionObject[dbOption.type]
            )
          : sessionObject[dbOption.type];
        dbOption.logger = new LoggerTypeorm(log.default);
        return dbOption;
      })
      .map((dbOption) => {
        return createConnection(dbOption.name, dbOption);
      });
    await Promise.all(ormConfig);
  },
  //__start__script__ndefault-sql__end

  //__start__script__ndefault-mongodb
  async () => {
    const monogConnections = MongoConnections.getInstance();
    const dbConfig = configNodes.default['db-config'];
    if (!dbConfig) {
      return;
    }
    const isValidDbConfig = (dbConf) =>
      dbConf?.dbOption &&
      !(typeof dbConf.disabledb === 'boolean' && dbConf.disabledb) &&
      dbConf.dbOption.type === 'mongodb';
    const dbConfigKeys = Object.keys(dbConfig).filter((key) =>
      isValidDbConfig(dbConfig[key])
    );
    for (const dbConfigKey of dbConfigKeys) {
      const dbOption = dbConfig[dbConfigKey].dbOption;
      await monogConnections.newConnection(dbOption, dbConfigKey);
    }
  },
  //__start__script__ndefault-mongodb__end
];
