import * as nodemailer from 'nodemailer';
import * as MailParser from 'mailparser';

let EmailServiceInstance: EmailOutService = null;
let __simpleParser: any;

const assignableKeyMap = {
    routingOptions: [
        'sender',
        'replyTo',
        'inReplyTo',
        'references',
        'envelope',
    ],
    contentOptions: [
        'attachDataUrls',
        'watchHtml',
        'amp',
        'encoding',
        'raw',
        'textEncoding',
        'alternatives',
    ],
    securityOptions: ['disableFileAccess', 'disableUrlAccess'],
    headerOptions: ['headers', 'messageId', 'date', 'priority', 'xMailer'],
};

export class EmailOutService {
    static getInstance(): EmailOutService {
        if (!EmailServiceInstance) {
            EmailServiceInstance = new EmailOutService();
            __simpleParser = MailParser.simpleParser;
        }
        return EmailServiceInstance;
    }

    sendEmail(serverOptions: ServerOptions, emailOptions: EmailOptions) {
        return new Promise((resolve, reject) => {
            const smtpOptions: SMTPOptions = {
                host: serverOptions.server,
                port: serverOptions.port,
                secure: serverOptions.secure,
                tls: serverOptions.tls,
            };

            if (emailOptions.userid && emailOptions.password) {
                smtpOptions.auth = {
                    user: emailOptions.userid,
                    pass: emailOptions.password,
                };
            }
            const sendopts: any = {
                from: emailOptions.from || emailOptions.userid,
            };
            const directKeys = ['to', 'subject', 'cc', 'bcc', 'html'];
            directKeys.forEach(key => {
                if (emailOptions[key]) {
                    sendopts[key] = emailOptions[key];
                }
            });

            for (const key of Object.keys(assignableKeyMap)) {
                if (emailOptions[key]) {
                    assignableKeyMap[key].forEach(assignableKey => {
                        if (emailOptions[key][assignableKey]) {
                            sendopts[assignableKey] =
                                emailOptions[key][assignableKey];
                        }
                    });
                }
            }

            if (emailOptions.iCal) {
                sendopts.icalEvent = emailOptions.iCal;
            }

            const smtpTransport = nodemailer.createTransport(smtpOptions);
            let payload;
            if (Buffer.isBuffer(emailOptions.body)) {
                if (!emailOptions.filename) {
                    let fe = 'bin';
                    if (
                        emailOptions.body[0] === 0xff &&
                        emailOptions.body[1] === 0xd8
                    ) {
                        fe = 'jpg';
                    }
                    if (
                        emailOptions.body[0] === 0x47 &&
                        emailOptions.body[1] === 0x49
                    ) {
                        fe = 'gif';
                    } //46
                    if (
                        emailOptions.body[0] === 0x42 &&
                        emailOptions.body[1] === 0x4d
                    ) {
                        fe = 'bmp';
                    }
                    if (
                        emailOptions.body[0] === 0x89 &&
                        emailOptions.body[1] === 0x50
                    ) {
                        fe = 'png';
                    } //4E
                    emailOptions.filename = 'attachment.' + fe;
                }
                const fname =
                    emailOptions.filename.replace(/^.*[\\\/]/, '') ||
                    'file.bin';
                sendopts.attachments = [
                    {
                        content: emailOptions.body,
                        filename: fname,
                    },
                ];
                if (emailOptions.headerOptions.headers['content-type']) {
                    sendopts.attachments[0].contentType =
                        emailOptions.headerOptions.headers['content-type'];
                }
            } else {
                sendopts.text = '' + emailOptions.body;
                if (/<[a-z][\s\S]*>/i.test(payload)) {
                    sendopts.html = sendopts.text;
                }
                if (emailOptions.attachments) {
                    sendopts.attachments = emailOptions.attachments;
                }
            }
            smtpTransport.sendMail(sendopts, function (error, info) {
                if (error) {
                    return reject(error);
                }
                return resolve(info);
            });
        });
    }
}
type ServerOptions = {
    server: string;
    port: number;
    secure: boolean;
    tls: boolean;
};

type EmailOptions = {
    userid: string;
    password: string;
    to: string;
    subject: string;
    body?: any;
    cc?: string;
    bcc?: string;
    from?: string;
    html?: any;
    iCal?: any;
    routingOptions?: any;
    contentOptions?: any;
    securityOptions?: any;
    headerOptions?: any;
    filename?: any;
    attachments?: any;
};

type SMTPOptions = {
    host: string;
    port: number;
    secure: boolean;
    tls: boolean;
    auth?: {
        user: string;
        pass: string;
    };
};
