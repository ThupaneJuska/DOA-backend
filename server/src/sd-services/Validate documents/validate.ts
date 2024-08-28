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
          bh = await this.sd_d9xy6XVwubzp0A0U(bh, parentSpanInst);
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

  async sd_d9xy6XVwubzp0A0U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d9xy6XVwubzp0A0U',
      parentSpanInst
    );
    try {
      bh.fileType = bh.input.files.file[0].mimetype;
      console.log('Files', bh.fileType);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xhnKQUzRbmpmelIi(bh, parentSpanInst);
      //appendnew_next_sd_d9xy6XVwubzp0A0U
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d9xy6XVwubzp0A0U',
        spanInst,
        'sd_d9xy6XVwubzp0A0U'
      );
    }
  }

  async sd_xhnKQUzRbmpmelIi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xhnKQUzRbmpmelIi',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.fileType,
          'application/pdf',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_JflaU2UEJEghDS4A(bh, parentSpanInst);
      } else {
        bh = await this.sd_sBBGO1AZ2UR5s3jE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xhnKQUzRbmpmelIi',
        spanInst,
        'sd_xhnKQUzRbmpmelIi'
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
      const poppler = require('pdf-poppler');
      const path = require('path');
      const fs = require('fs').promises;
      const sharp = require('sharp');
      const { exec } = require('child_process');

      bh.filePath = bh.input.files.file[0].path;

      function containsPhrases(text, phrases) {
        console.log('here');
        return phrases.some((phrase) => text.includes(phrase));
      }

      async function convertPdfToImage(pdfPath) {
        try {
          const outputDir = path.dirname(pdfPath);
          const outputBaseName = path.basename(pdfPath, path.extname(pdfPath));

          const options = {
            format: 'png',
            out_dir: outputDir,
            out_prefix: outputBaseName,
            page: null,
          };

          await poppler.convert(pdfPath, options);

          console.log(
            `PDF pages have been converted to images and saved in ${outputDir}`
          );

          const files = await fs.readdir(outputDir);
          const imageFiles = files.filter(
            (file) => file.startsWith(outputBaseName) && file.endsWith('.png')
          );

          const promises = imageFiles.map(async (imageFile) => {
            const imagePath = path.join(outputDir, imageFile);

            console.log(`Processing image: ${imagePath}`);

            try {
              const {
                data: { text },
              } = await Tesseract.recognize(imagePath, 'eng', {
                logger: (m) => console.log('Extracting'),
              });

              const phrasesToCheck = ['NOTICE OF DEATH', 'STILL BIRTH'];
              if (containsPhrases(text, phrasesToCheck)) {
                bh.match = true;
                console.log(
                  'Image contains one or more of the specified phrases.'
                );
              } else {
                bh.match = false;
                console.log(
                  'Image does not contain any of the specified phrases.'
                );
              }
              console.log('Here is the text', text);
            } catch (err) {
              console.log('Error reading image', err);
            }
          });

          await Promise.all(promises);
        } catch (err) {
          console.error('Error converting PDF to image:', err);
        }
      }
      await convertPdfToImage(bh.filePath);
      bh.isDeathForm = bh.match;
      console.log(`Final match status: ${bh.match}`);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vPkFFeMZTB1imDRW(bh, parentSpanInst);
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

  async sd_vPkFFeMZTB1imDRW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vPkFFeMZTB1imDRW',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_JQrNEJeDcavWF0vm(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_w4svRIubmmeVYpqk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vPkFFeMZTB1imDRW',
        spanInst,
        'sd_vPkFFeMZTB1imDRW'
      );
    }
  }

  async sd_JQrNEJeDcavWF0vm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JQrNEJeDcavWF0vm',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Valid Form',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6OXTC1bnlLJumd5(bh, parentSpanInst);
      //appendnew_next_sd_JQrNEJeDcavWF0vm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JQrNEJeDcavWF0vm',
        spanInst,
        'sd_JQrNEJeDcavWF0vm'
      );
    }
  }

  async sd_c6OXTC1bnlLJumd5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c6OXTC1bnlLJumd5');
    }
  }

  async sd_w4svRIubmmeVYpqk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w4svRIubmmeVYpqk',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Invalid Form',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6OXTC1bnlLJumd5(bh, parentSpanInst);
      //appendnew_next_sd_w4svRIubmmeVYpqk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w4svRIubmmeVYpqk',
        spanInst,
        'sd_w4svRIubmmeVYpqk'
      );
    }
  }

  async sd_sBBGO1AZ2UR5s3jE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sBBGO1AZ2UR5s3jE',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Only PDF Allowed',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6OXTC1bnlLJumd5(bh, parentSpanInst);
      //appendnew_next_sd_sBBGO1AZ2UR5s3jE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sBBGO1AZ2UR5s3jE',
        spanInst,
        'sd_sBBGO1AZ2UR5s3jE'
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
