// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { PubsubUtil } from '../../utils/ndefault-pub-sub/listen/listen'; //_splitter_
//append_imports_end
export class behaviorSubject {
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
    this.serviceName = 'behaviorSubject';
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
      instance = new behaviorSubject(
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
    //appendnew_flow_behaviorSubject_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: behaviorSubject');
    //appendnew_flow_behaviorSubject_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: behaviorSubject');
    //appendnew_flow_behaviorSubject_HttpIn
  }
  //   service flows_behaviorSubject

  async emit(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan('emit', parentSpanInst);
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8EhpONUkjzZvzPu9(bh, parentSpanInst);
      //appendnew_next_emit
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fGUllc6fzqZP1z1U',
        spanInst,
        'emit'
      );
    }
  }
  //appendnew_flow_behaviorSubject_start

  async sd_8EhpONUkjzZvzPu9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8EhpONUkjzZvzPu9',
      parentSpanInst
    );
    try {
      PubsubUtil.getInstance().emit(bh.web, bh, spanInst);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3wGjBqLQPC4hkFKQ(bh, parentSpanInst);
      //appendnew_next_sd_8EhpONUkjzZvzPu9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8EhpONUkjzZvzPu9',
        spanInst,
        'sd_8EhpONUkjzZvzPu9'
      );
    }
  }

  async sd_3wGjBqLQPC4hkFKQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3wGjBqLQPC4hkFKQ',
      parentSpanInst
    );
    try {
      console.log(bh.web);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3wGjBqLQPC4hkFKQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wGjBqLQPC4hkFKQ',
        spanInst,
        'sd_3wGjBqLQPC4hkFKQ'
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
  //appendnew_flow_behaviorSubject_Catch
}
