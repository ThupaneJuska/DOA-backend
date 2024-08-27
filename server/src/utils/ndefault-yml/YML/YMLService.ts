import * as yaml from 'js-yaml';

let YMLServiceInstance = null;
export class YMLService {
    private constructor() {}

    static getInstance(): YMLService {
        if (!YMLServiceInstance) {
            YMLServiceInstance = new YMLService();
        }
        return YMLServiceInstance;
    }

    async yml(payload) {
        if (payload === undefined) {
            throw new Error('Invalid arguments');
        }
        if (typeof payload === 'string') {
            payload = yaml.load(payload);
            return payload;
        }
        if (typeof payload === 'object') {
            if (Buffer.isBuffer(payload)) {
                throw new Error('Invalid YAML object');
            }
            payload = yaml.dump(payload);
            return payload;
        }
        throw new Error(
            'YAML convertor takes either a valid YAML string to convert to JSON or a JSON to convert to YAML'
        );
    }
}
