const events = require('events');
const eventEmitter = new events.EventEmitter();

let PubSubInstance = null;
export class PubsubUtil {
    static getInstance(): PubsubUtil {
        if (!PubSubInstance) {
            PubSubInstance = new PubsubUtil();
        }
        return PubSubInstance;
    }
    on(event, callback) {
        eventEmitter.on(event, callback);
    }
    once(event, callback) {
        eventEmitter.once(event, callback);
    }
    emit(event, data, parentSpanInst, ...others) {
        eventEmitter.emit(event, data, parentSpanInst, ...others);
    }
}
