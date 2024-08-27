import * as iconv from 'iconv-lite';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { resolve } from 'path';

let FileOutServiceInstance: FileOutService = null;

export class FileOutService {
    private constructor() {}

    static getInstance(): FileOutService {
        if (!FileOutServiceInstance) {
            FileOutServiceInstance = new FileOutService();
        }
        return FileOutServiceInstance;
    }

    /**
     *
     * @param fileInOptions {
     *      path: path to the file to write
     *      payload: buffer to be written
     *      encoding: encoding of the buffer
     *      appendNewLine: append EOL at the end of buffer
     *      overwriteFile: if file already present, overwrite it
     *      createDir: if directory not present in the path, create it
     * }
     *
     * all encodings supported by iconv-lite:
     * https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings
     */
    fileOut(fileInOptions: {
        filepath: string;
        payload;
        encoding?: string;
        appendNewline?: boolean;
        overwriteFile?: boolean;
        createDir?: boolean;
        isStreaming?: boolean;
    }) {
        return new Promise((resolve, reject) => {
            if (!fileInOptions.filepath) {
                return reject(new Error('File name for file out options'));
            }
            let filepath = fileInOptions.filepath;
            if (fileInOptions.overwriteFile && fs.existsSync(filepath)) {
                fs.unlink(filepath, err => {
                    if (err) {
                        return reject(err);
                    } else {
                        this.uploadFilePayload(fileInOptions, resolve, reject);
                    }
                });
            } else {
                this.uploadFilePayload(fileInOptions, resolve, reject);
            }
        });
    }

    private async uploadFilePayload(
        fileInOptions: {
            filepath: string;
            payload;
            encoding?: string;
            appendNewline?: boolean;
            overwriteFile?: boolean;
            createDir?: boolean;
            isStreaming?: boolean;
        },
        resolve,
        reject
    ) {
        let filepath = fileInOptions.filepath;
        if (!fileInOptions.payload) {
            return resolve();
        }
        const dir = path.dirname(filepath);
        if (fileInOptions.createDir) {
            try {
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
            } catch (err) {
                return reject(err);
            }
        }

        if (fileInOptions.isStreaming) {
            await this.createWriteStream(fileInOptions, {
                flags: fileInOptions.overwriteFile ? 'w' : 'a',
                autoClose: true,
            });
            return resolve();
        }
        let data = fileInOptions.payload;
        if (typeof data === 'object' && !Buffer.isBuffer(data)) {
            data = JSON.stringify(data);
        }
        if (typeof data === 'boolean') {
            data = data.toString();
        }
        if (typeof data === 'number') {
            data = data.toString();
        }
        if (fileInOptions.appendNewline && !Buffer.isBuffer(data)) {
            data += os.EOL;
        }

        if (fileInOptions.encoding) {
            data = this.encode(data, fileInOptions.encoding);
        }
        if (fileInOptions.overwriteFile) {
            const wstream = fs.createWriteStream(filepath, {
                encoding: 'binary',
                flags: 'w',
                autoClose: true,
            });
            wstream.on('error', err => reject(err));
            wstream.on('open', () => {
                wstream.end(fileInOptions.payload, () => resolve());
            });
        } else {
            fs.open(fileInOptions.filepath, 'a', (err, fd) => {
                if (err) {
                    return reject(err);
                }
                fs.appendFile(fd, data, err => {
                    fs.close(fd, err => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                    if (err) {
                        return reject(err);
                    }
                });
            });
        }
    }

    createWriteStream(fileInOptions, options) {
        return new Promise<void | string>((resolve, reject) => {
            const wstream = fs.createWriteStream(
                fileInOptions.filepath,
                options
            );
            if (fileInOptions.encoding) {
                let str = '';
                fileInOptions.payload.on('data', data => {
                    str += this.encode(data, fileInOptions.encoding);
                });
                wstream.on('open', () => {
                    wstream.end(str, () => resolve());
                });
            } else {
                fileInOptions.payload.pipe(wstream);
                fileInOptions.payload.on('end', () => resolve('file write'));
            }
            wstream.on('error', err => reject(err));
        });
    }

    encode(data, enc) {
        if (enc !== 'none') {
            return iconv.encode(data, enc);
        }
        return Buffer.from(data);
    }
}
