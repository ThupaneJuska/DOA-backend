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

    this.app['put'](
      `${this.serviceBasePath}/edit-schedule`,
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
          bh = await this.sd_dpqfgtMFR1Cb8iX7(bh, parentSpanInst);
          //appendnew_next_sd_8WIYVWAsTvMk5tPJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8WIYVWAsTvMk5tPJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete-schedule/:id`,
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
          bh = await this.sd_qAdbH7N514npV3lS(bh, parentSpanInst);
          //appendnew_next_sd_jOIvOMMGTQ3PqQgL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jOIvOMMGTQ3PqQgL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/log-payment`,
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
          bh = await this.sd_xMnypFFgURs3vKDL(bh, parentSpanInst);
          //appendnew_next_sd_Rm5sxBD1TxKWb8zi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Rm5sxBD1TxKWb8zi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-monthly-payments`,
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
          bh = await this.sd_ALbhFFYLVXuOn9E0(bh, parentSpanInst);
          //appendnew_next_sd_spYjiC6Cs4EZKNoc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_spYjiC6Cs4EZKNoc');
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

  async sd_dpqfgtMFR1Cb8iX7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dpqfgtMFR1Cb8iX7',
      parentSpanInst
    );
    try {
      bh.filter = {
        id: bh.input.body.id,
      };

      const dataToUpdate = { ...bh.input.body };
      bh.input.body = { $set: dataToUpdate };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y7CYLJm453ylV5DQ(bh, parentSpanInst);
      //appendnew_next_sd_dpqfgtMFR1Cb8iX7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dpqfgtMFR1Cb8iX7',
        spanInst,
        'sd_dpqfgtMFR1Cb8iX7'
      );
    }
  }

  async sd_y7CYLJm453ylV5DQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y7CYLJm453ylV5DQ',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().updateOne(
        'sd_PhRLzlckwjzX0TdC',
        'schedules',
        bh.filter,
        bh.input.body,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DpgF58qSyEwBLzsJ(bh, parentSpanInst);
      //appendnew_next_sd_y7CYLJm453ylV5DQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y7CYLJm453ylV5DQ',
        spanInst,
        'sd_y7CYLJm453ylV5DQ'
      );
    }
  }

  async sd_DpgF58qSyEwBLzsJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DpgF58qSyEwBLzsJ');
    }
  }

  async sd_qAdbH7N514npV3lS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qAdbH7N514npV3lS',
      parentSpanInst
    );
    try {
      bh.filter = {
        id: Number(bh.input.body.id),
      };

      console.log('filter: ', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PcTHIXllWxk3aNRV(bh, parentSpanInst);
      //appendnew_next_sd_qAdbH7N514npV3lS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qAdbH7N514npV3lS',
        spanInst,
        'sd_qAdbH7N514npV3lS'
      );
    }
  }

  async sd_PcTHIXllWxk3aNRV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PcTHIXllWxk3aNRV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_PhRLzlckwjzX0TdC',
        'schedules',
        bh.filter,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FzoTp3y92h58YTth(bh, parentSpanInst);
      //appendnew_next_sd_PcTHIXllWxk3aNRV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PcTHIXllWxk3aNRV',
        spanInst,
        'sd_PcTHIXllWxk3aNRV'
      );
    }
  }

  async sd_FzoTp3y92h58YTth(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FzoTp3y92h58YTth');
    }
  }

  async sd_xMnypFFgURs3vKDL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xMnypFFgURs3vKDL',
      parentSpanInst
    );
    try {
      bh.collection = 'monthly_payments';
      bh.input.body.date = new Date();

      bh.event = bh.input.body.event;
      bh.amount = bh.input.body.amount;

      if (bh.input.body.event == 'Missed payment') {
        bh.input.body.amount = 0;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_M76v3rXJcxRZZ4Dd(bh, parentSpanInst);
      //appendnew_next_sd_xMnypFFgURs3vKDL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xMnypFFgURs3vKDL',
        spanInst,
        'sd_xMnypFFgURs3vKDL'
      );
    }
  }

  async sd_M76v3rXJcxRZZ4Dd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_M76v3rXJcxRZZ4Dd',
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
      await this.sd_AiVLyjsp6PnOtU7Q(bh, parentSpanInst);
      //appendnew_next_sd_M76v3rXJcxRZZ4Dd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_M76v3rXJcxRZZ4Dd',
        spanInst,
        'sd_M76v3rXJcxRZZ4Dd'
      );
    }
  }

  async sd_AiVLyjsp6PnOtU7Q(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AiVLyjsp6PnOtU7Q');
    }
  }

  async sd_ALbhFFYLVXuOn9E0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ALbhFFYLVXuOn9E0',
      parentSpanInst
    );
    try {
      bh.collection = 'monthly_payments';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SZh1FyJtUF4w5zbr(bh, parentSpanInst);
      //appendnew_next_sd_ALbhFFYLVXuOn9E0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ALbhFFYLVXuOn9E0',
        spanInst,
        'sd_ALbhFFYLVXuOn9E0'
      );
    }
  }

  async sd_SZh1FyJtUF4w5zbr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SZh1FyJtUF4w5zbr',
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
      await this.sd_NkNFhD1e8JGBytax(bh, parentSpanInst);
      //appendnew_next_sd_SZh1FyJtUF4w5zbr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SZh1FyJtUF4w5zbr',
        spanInst,
        'sd_SZh1FyJtUF4w5zbr'
      );
    }
  }

  async sd_NkNFhD1e8JGBytax(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NkNFhD1e8JGBytax');
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
