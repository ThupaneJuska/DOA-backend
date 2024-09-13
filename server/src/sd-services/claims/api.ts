// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSL from '../Auth'; //_splitter_
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
          bh = await this.sd_NlYVbTW63Hleg2OU(bh, parentSpanInst);
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

    this.app['put'](
      `${this.serviceBasePath}/update_claim`,
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
          bh = await this.sd_8vgHhVtnSlWdusUK(bh, parentSpanInst);
          //appendnew_next_sd_ny8fhj561jXDwL1n
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ny8fhj561jXDwL1n');
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

  async sd_NlYVbTW63Hleg2OU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NlYVbTW63Hleg2OU',
      parentSpanInst
    );
    try {
      bh.policyNo = bh.input.body.claimNumber.split('-')[1];

      console.log('POLICY NO: ', bh.policyNo);

      bh.search = {
        collection: 'claims',
        query: { policyNo: Number(bh.policyNo) },
      };

      console.log('SEARCH: ', bh.search);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PGqPZiORcKSqjFNP(bh, parentSpanInst);
      //appendnew_next_sd_NlYVbTW63Hleg2OU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NlYVbTW63Hleg2OU',
        spanInst,
        'sd_NlYVbTW63Hleg2OU'
      );
    }
  }

  async sd_PGqPZiORcKSqjFNP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PGqPZiORcKSqjFNP',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSLInstance: SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSL.Auth =
        SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSL.Auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSLInstance.checkIfExist(
          spanInst,
          bh.search
        );
      bh.found = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1MsfAovHQUCkaNDE(bh, parentSpanInst);
      //appendnew_next_sd_PGqPZiORcKSqjFNP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PGqPZiORcKSqjFNP',
        spanInst,
        'sd_PGqPZiORcKSqjFNP'
      );
    }
  }

  async sd_1MsfAovHQUCkaNDE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1MsfAovHQUCkaNDE',
      parentSpanInst
    );
    try {
      bh.payload = bh.input.body;

      bh.count = bh.found.length + 1;

      bh.claimNo = bh.input.body.claimNumber + '-' + bh.count;

      console.log('CLAIM NO: ', bh.claimNo);

      bh.payload.claimNumber = bh.claimNo;

      bh.collection = 'claims';
      bh.payload.date = new Date();

      console.log('PAYLOAD:', bh.payload);

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
        bh.payload,
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

  async sd_8vgHhVtnSlWdusUK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8vgHhVtnSlWdusUK',
      parentSpanInst
    );
    try {
      const updateData = { ...bh.input.body };

      bh.filter = { claimNumber: updateData.claimNumber };
      bh.collection = 'claims';

      bh.search = {
        ...bh.filter,
        collection: 'claims',
      };

      console.log('SEARCH: ', bh.search);

      updateData.status = bh.input.body.status;
      delete updateData.deceased.status;
      delete updateData._id;

      bh.body = { $set: updateData };

      console.log('UPDATED DATA: ', bh.body);
      console.log('Filter: ', bh.filter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r5fMFLI8hFNJ69gl(bh, parentSpanInst);
      //appendnew_next_sd_8vgHhVtnSlWdusUK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8vgHhVtnSlWdusUK',
        spanInst,
        'sd_8vgHhVtnSlWdusUK'
      );
    }
  }

  async sd_r5fMFLI8hFNJ69gl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r5fMFLI8hFNJ69gl',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSLInstance: SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSL.Auth =
        SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSL.Auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_qcsHvGUKUKU7RTSLInstance.checkIfExist(
          spanInst,
          bh.search
        );
      bh.foundClaim = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ny6rh1iPud0sHaY7(bh, parentSpanInst);
      this.sd_j5bgewAfqB0ztWa4(bh, parentSpanInst);
      //appendnew_next_sd_r5fMFLI8hFNJ69gl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r5fMFLI8hFNJ69gl',
        spanInst,
        'sd_r5fMFLI8hFNJ69gl'
      );
    }
  }

  async sd_ny6rh1iPud0sHaY7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ny6rh1iPud0sHaY7',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_PhRLzlckwjzX0TdC',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_x7iVRuFfC2BUT03i(bh, parentSpanInst);
      //appendnew_next_sd_ny6rh1iPud0sHaY7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ny6rh1iPud0sHaY7',
        spanInst,
        'sd_ny6rh1iPud0sHaY7'
      );
    }
  }

  async sd_x7iVRuFfC2BUT03i(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x7iVRuFfC2BUT03i');
    }
  }

  async sd_j5bgewAfqB0ztWa4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j5bgewAfqB0ztWa4',
      parentSpanInst
    );
    try {
      let logobj: any = bh.foundClaim;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_j5bgewAfqB0ztWa4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j5bgewAfqB0ztWa4',
        spanInst,
        'sd_j5bgewAfqB0ztWa4'
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
  //appendnew_flow_api_Catch
}
