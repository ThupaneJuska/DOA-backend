import * as mongodb from 'mongodb';
import * as fs from 'fs';
import * as BSON from 'bson';
import { MongoConnections } from './MongoConnections';

export class MongoPersistance {
    invalidDbRefmsg = 'Invalid config. Please select properconfig';
    private static instance;
    private constructor() {}

    static getInstance(): MongoPersistance {
        if (!MongoPersistance.instance) {
            MongoPersistance.instance = new MongoPersistance();
        }
        return MongoPersistance.instance;
    }

    async updateOne(configId, entity, filter, update, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        filter = this.deserialize(filter);
        update = this.deserialize(update);
        return dsRef.db().collection(entity).updateOne(filter, update, options);
    }

    async updateMany(configId, entity, filter, update, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        filter = this.deserialize(filter);
        update = this.deserialize(update);
        return dsRef
            .db()
            .collection(entity)
            .updateMany(filter, update, options);
    }

    /**************FINDERS*****************************/
    async findOne(configId, entity, query, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        query = this.deserialize(query);
        return dsRef.db().collection(entity).findOne(query, options);
    }

    async find(configId, entity, query, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        query = this.deserialize(query);
        const cursor = dsRef.db().collection(entity).find(query, options);
        return cursor.toArray();
    }

    async findOneAndUpdate(configId, entity, query, update, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        query = this.deserialize(query);
        update = this.deserialize(update);
        return dsRef
            .db()
            .collection(entity)
            .findOneAndUpdate(query, update, options);
    }

    async countDocuments(configId, entity, query, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        const filter = this.deserialize(query);
        return {
            count: await dsRef
                .db()
                .collection(entity)
                .countDocuments(filter, options),
        };
    }
    /************************************************************/

    async insertOne(configId, entity, doc, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        doc = this.deserialize(doc);
        return dsRef.db().collection(entity).insertOne(doc, options);
    }

    async insertMany(configId, entity, doc, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        doc = this.deserialize(doc);
        return dsRef.db().collection(entity).insertMany(doc, options);
    }

    async deleteOne(configId, entity, filter, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        filter = this.deserialize(filter);
        return dsRef.db().collection(entity).deleteOne(filter, options);
    }

    async deleteMany(configId, entity, filter, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        filter = this.deserialize(filter);
        return dsRef.db().collection(entity).deleteMany(filter, options);
    }

    uploadFile(configId, entity, filePath, fileName, options) {
        return new Promise((resolve, reject) => {
            const dsRef =
                MongoConnections.getInstance().getMongoInstance(configId);
            if (typeof dsRef === 'undefined') {
                return reject(new Error(this.invalidDbRefmsg));
            } else {
                try {
                    const bucketOptions = { bucketName: entity };
                    const readStream = fs.createReadStream(filePath);
                    const bucket = new mongodb.GridFSBucket(
                        dsRef.db(),
                        bucketOptions
                    );
                    const uploadStream = bucket.openUploadStream(
                        fileName,
                        options
                    );
                    readStream
                        .pipe(uploadStream)
                        .on('error', function (error) {
                            return reject(error);
                        })
                        .on('finish', function (result) {
                            return resolve(result);
                        });
                } catch (error) {
                    return reject(new Error(error));
                }
            }
        });
    }

    downloadFile(configId, entity, filter) {
        return new Promise((resolve, reject) => {
            const dsRef =
                MongoConnections.getInstance().getMongoInstance(configId);
            if (typeof dsRef === 'undefined') {
                throw new Error(this.invalidDbRefmsg);
            } else {
                try {
                    const bucketOptions = { bucketName: entity };
                    const bucket = new mongodb.GridFSBucket(
                        dsRef.db(),
                        bucketOptions
                    );
                    const cursor = bucket.find(filter);
                    cursor.toArray((error, docs) => {
                        if (error) {
                            return reject(error);
                        } else {
                            if (docs && docs.length > 0) {
                                const metadata = docs[0]; //this is the metadata;
                                const downloadStream =
                                    bucket.openDownloadStream(
                                        docs[0]._id,
                                        null
                                    );
                                return resolve({
                                    metadata: metadata,
                                    downloadStream: downloadStream,
                                });
                            } else {
                                return reject(new Error('FILE_NOT_FOUND'));
                            }
                        }
                    });
                } catch (error) {
                    throw new Error(error);
                }
            }
        });
    }

    deleteFile(configId, entity, id) {
        return new Promise((resolve, reject) => {
            if (typeof id == 'string') {
                id = new mongodb.ObjectId(id);
            }
            const dsRef =
                MongoConnections.getInstance().getMongoInstance(configId);
            if (typeof dsRef === 'undefined') {
                throw new Error(this.invalidDbRefmsg);
            } else {
                const bucketOptions = { bucketName: entity };
                const bucket = new mongodb.GridFSBucket(
                    dsRef.db(),
                    bucketOptions
                );
                bucket.delete(id, (error, result) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(id);
                });
            }
        });
    }

    /**************INDEX*****************************/
    async createIndex(configId, entity, fieldOrSpec, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).createIndex(fieldOrSpec, options);
    }

    async dropIndex(configId, entity, indexName, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).dropIndex(indexName, options);
    }

    aggregate(configId, entity, pipeline, options) {
        return new Promise((resolve, reject) => {
            const dsRef =
                MongoConnections.getInstance().getMongoInstance(configId);
            if (typeof dsRef === 'undefined') {
                reject(new Error(this.invalidDbRefmsg));
            } else {
                try {
                    const cursor = dsRef
                        .db()
                        .collection(entity)
                        .aggregate(pipeline, options);
                    return resolve(cursor.toArray());
                } catch (error) {
                    return reject(new Error(error));
                }
            }
        });
    }

    async bulkWrite(configId, entity, doc, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        doc = this.deserialize(doc);
        return dsRef.db().collection(entity).bulkWrite(doc, options);
    }

    async distinct(configId, entity, key, query, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).distinct(key, query, options);
    }

    async drop(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).drop(options);
    }

    async dropIndexes(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).dropIndexes(options);
    }

    async estimatedDocumentCount(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).estimatedDocumentCount(options);
    }

    async findOneAndReplace(configId, entity, filter, replacement, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        filter = this.deserialize(filter);
        return dsRef
            .db()
            .collection(entity)
            .findOneAndReplace(filter, replacement, options);
    }

    async findOneAndDelete(configId, entity, query, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        query = this.deserialize(query);
        return dsRef.db().collection(entity).findOneAndDelete(query, options);
    }

    async indexExists(configId, entity, indexes, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).indexExists(indexes, options);
    }

    async indexInformation(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).indexInformation(options);
    }

    async indexes(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).indexes(options);
    }

    async initializeOrderedBulkOp(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).initializeOrderedBulkOp(options);
    }

    async initializeUnorderedBulkOp(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).initializeUnorderedBulkOp(options);
    }

    async isCapped(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).isCapped(options);
    }

    async listIndexes(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        const cursor = await dsRef.db().collection(entity).listIndexes(options);
        return Promise.resolve(cursor.toArray());
    }

    async mapReduce(configId, entity, map, reduce, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).mapReduce(map, reduce, options);
    }

    async options(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).options(options);
    }

    async reIndex(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        try {
            return dsRef.db().collection(entity).reIndex(options);
        } catch (error) {
            throw new Error(error);
        }
    }

    async rename(configId, entity, newName, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        try {
            return dsRef.db().collection(entity).rename(newName, options);
        } catch (error) {
            throw new Error(error);
        }
    }

    async replaceOne(configId, entity, filter, doc, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).replaceOne(filter, doc, options);
    }

    async stats(configId, entity, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).stats(options);
    }

    async watch(configId, entity, pipeline, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        const streamChanges = dsRef
            .db()
            .collection(entity)
            .watch(pipeline, options);
        return streamChanges;
    }

    async geoHaystackSearch(configId, entity, x, y, options) {
        const dsRef = MongoConnections.getInstance().getMongoInstance(configId);
        if (typeof dsRef === 'undefined') {
            throw new Error(this.invalidDbRefmsg);
        }
        return dsRef.db().collection(entity).geoHaystackSearch(x, y, options);
    }

    private deserialize(item: Buffer | ArrayBuffer | ArrayBufferView) {
        if (
            Buffer.isBuffer(item) ||
            item instanceof ArrayBuffer ||
            ArrayBuffer.isView(item)
        ) {
            return BSON.deserialize(item);
        }
        return item;
    }
}
