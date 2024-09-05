// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
    //appendnew_flow_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');
    //appendnew_flow_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['post'](
      `${this.serviceBasePath}/add-claim`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

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
          bh = await this.sd_1MsfAovHQUCkaNDE(bh, parentSpanInst);
          //appendnew_next_sd_zm2vJ5zZBorn8Iq1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zm2vJ5zZBorn8Iq1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-claims`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

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
          bh = await this.sd_UQ2eF4vSY8PN9bLM(bh, parentSpanInst);
          //appendnew_next_sd_ZvXZqmFrqvDEaIAA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZvXZqmFrqvDEaIAA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async sd_1MsfAovHQUCkaNDE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1MsfAovHQUCkaNDE',
      parentSpanInst
    );
    try {
      bh.collection = 'claims';
      bh.input.body.date = new Date();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CfzW0EE3u9aX9DmX(bh, parentSpanInst);
      //appendnew_next_sd_1MsfAovHQUCkaNDE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1MsfAovHQUCkaNDE',
        spanInst,
        'sd_1MsfAovHQUCkaNDE'
      );
    }
  }

  async sd_CfzW0EE3u9aX9DmX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CfzW0EE3u9aX9DmX',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_PhRLzlckwjzX0TdC',
        bh.collection,
        bh.input.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bFUKlYs5aDknVhst(bh, parentSpanInst);
      //appendnew_next_sd_CfzW0EE3u9aX9DmX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CfzW0EE3u9aX9DmX',
        spanInst,
        'sd_CfzW0EE3u9aX9DmX'
      );
    }
  }

  async sd_bFUKlYs5aDknVhst(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bFUKlYs5aDknVhst');
    }
  }

  async sd_UQ2eF4vSY8PN9bLM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UQ2eF4vSY8PN9bLM',
      parentSpanInst
    );
    try {
      bh.collection = 'claims';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZY9QiVfLcBWJSyUD(bh, parentSpanInst);
      //appendnew_next_sd_UQ2eF4vSY8PN9bLM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UQ2eF4vSY8PN9bLM',
        spanInst,
        'sd_UQ2eF4vSY8PN9bLM'
      );
    }
  }

  async sd_ZY9QiVfLcBWJSyUD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZY9QiVfLcBWJSyUD',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_PhRLzlckwjzX0TdC',
        bh.collection,
        bh.query,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ba2xymnw0nSEWXia(bh, parentSpanInst);
      //appendnew_next_sd_ZY9QiVfLcBWJSyUD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZY9QiVfLcBWJSyUD',
        spanInst,
        'sd_ZY9QiVfLcBWJSyUD'
      );
    }
  }

  async sd_Ba2xymnw0nSEWXia(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ba2xymnw0nSEWXia');
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
  //appendnew_flow_api_Catch
}
