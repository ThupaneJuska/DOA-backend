// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class validate {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'validate';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new validate(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_validate_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: validate');
    //appendnew_flow_validate_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: validate');

    this.app['post'](
      `${this.serviceBasePath}/validate-id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_wZ84jgXewjpWtL1H(bh, parentSpanInst);
          //appendnew_next_sd_0jWjsaH89UBrz127
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0jWjsaH89UBrz127');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/death-form`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_JflaU2UEJEghDS4A(bh, parentSpanInst);
          //appendnew_next_sd_9CJpCeKNoHWIoYOL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9CJpCeKNoHWIoYOL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_validate_HttpIn
  }
  //   service flows_validate

  //appendnew_flow_validate_start

  async sd_wZ84jgXewjpWtL1H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wZ84jgXewjpWtL1H',
      parentSpanInst
    );
    try {
      const Tesseract = require('tesseract.js');
      bh.filePath = bh.input.files.file[0].path;
      bh.match;
      function data() {
        return new Promise(async (resolve, reject) => {
          await Tesseract.recognize(bh.filePath, 'eng', {
            logger: (m) => console.log(m),
          })
            .then(({ data: { text } }) => {
              const pattern = /\b\d{13}\b/g;
              const matches = text.match(pattern);
              bh.match = matches;

              resolve();
            })
            .catch((err) => {
              console.log('Error reading Image', err);
              rejecte();
            });
        });
      }

      await data();
      console.log('bh matches ID', bh.match);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f5RkNajEO7WBLBMr(bh, parentSpanInst);
      //appendnew_next_sd_wZ84jgXewjpWtL1H
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wZ84jgXewjpWtL1H',
        spanInst,
        'sd_wZ84jgXewjpWtL1H'
      );
    }
  }

  async sd_f5RkNajEO7WBLBMr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f5RkNajEO7WBLBMr',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wC2sbWsFY0JkoyXT(bh, parentSpanInst);
      } else {
        bh = await this.sd_SDjqm9P1Gf57KMZS(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f5RkNajEO7WBLBMr',
        spanInst,
        'sd_f5RkNajEO7WBLBMr'
      );
    }
  }

  async sd_wC2sbWsFY0JkoyXT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wC2sbWsFY0JkoyXT',
      parentSpanInst
    );
    try {
      console.log('Valid ID');
      bh.result = {
        message: 'ID Is Valid',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AknA2hzjC1MaFJIX(bh, parentSpanInst);
      //appendnew_next_sd_wC2sbWsFY0JkoyXT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wC2sbWsFY0JkoyXT',
        spanInst,
        'sd_wC2sbWsFY0JkoyXT'
      );
    }
  }

  async sd_AknA2hzjC1MaFJIX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AknA2hzjC1MaFJIX');
    }
  }

  async sd_SDjqm9P1Gf57KMZS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SDjqm9P1Gf57KMZS',
      parentSpanInst
    );
    try {
      console.log('InValid ID');
      bh.result = {
        message: 'ID Is InValid',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AknA2hzjC1MaFJIX(bh, parentSpanInst);
      //appendnew_next_sd_SDjqm9P1Gf57KMZS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SDjqm9P1Gf57KMZS',
        spanInst,
        'sd_SDjqm9P1Gf57KMZS'
      );
    }
  }

  async sd_JflaU2UEJEghDS4A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JflaU2UEJEghDS4A',
      parentSpanInst
    );
    try {
      const Tesseract = require('tesseract.js');
      const pdfLib = require('pdf-lib');
      const pdfjsLib = require('pdfjsLib');
      const { convert } = require('pdf-poppler');

      (
        pdfjsLib as any
      ).GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

      console.log(bh.input.files.file[0]);
      bh.filePath = bh.input.files.file[0].path
        ? bh.input.files.file[0].path.toString()
        : null;
      if (!bh.filePath) {
        console.error('File path is null or undefined');
        // Handle the error accordingly
      } else {
        console.log('File found', bh.filePath);
      }

      async function convertPdfToImages(pdfPath) {
        const outputImages = await convert(pdfPath, { format: 'png' });
        console.log('OUtput image', outputImages);
        return outputImages;
      }

      convertPdfToImages(bh.filePath);

      // async function data() {
      //     return new Promise(async (resolve, reject) => {
      //         try {
      //             const images = await convertPdfToImages("file\\2af850363538c131389fe97e622a8588");
      //             console.log("Images data",images)

      //             // let allText = '';

      //             // for (const image of images) {
      //             //     const { data: { text } } = await Tesseract.recognize(
      //             //         image,
      //             //         'eng',
      //             //         { logger: m => console.log(m) }
      //             //     );
      //             //     console.log("Data", text)
      //             //     // allText += text;
      //             // }

      //             resolve();
      //         } catch (err) {
      //             console.log("Error reading PDF", err);
      //             reject(err);
      //         }
      //     });
      // }

      // (async () => {
      //     await data();
      //     console.log("bh matches ID", bh.match);
      // })();
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JflaU2UEJEghDS4A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JflaU2UEJEghDS4A',
        spanInst,
        'sd_JflaU2UEJEghDS4A'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_validate_Catch
}
