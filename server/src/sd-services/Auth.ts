// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class Auth {
  public ran: any;
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
    this.serviceName = 'Auth';
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
      instance = new Auth(
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
    //appendnew_flow_Auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth');
    //appendnew_flow_Auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth');

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_0amagmwLABZ7tYYB(bh, parentSpanInst);
          //appendnew_next_sd_K5Lq4ShjAsVlTnL6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_K5Lq4ShjAsVlTnL6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/forgot-password`,
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
          bh = await this.sd_qTk50dG9TrrmireO(bh, parentSpanInst);
          //appendnew_next_sd_uxfZT6tUi5arCx0W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uxfZT6tUi5arCx0W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/register`,
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
          bh = await this.sd_Vi6Ftg5Mf4eaD6DX(bh, parentSpanInst);
          //appendnew_next_sd_f2dx46Jf4lQfF0ZZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f2dx46Jf4lQfF0ZZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-code`,
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
          bh = await this.sd_7iqbrRi94DLel100(bh, parentSpanInst);
          //appendnew_next_sd_IZuw9UqTTIjShIgn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IZuw9UqTTIjShIgn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/reset-password/:_id`,
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
          bh = await this.sd_Z00H3cmNCcGccaBK(bh, parentSpanInst);
          //appendnew_next_sd_UmxR1hsHZeLKCLOy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UmxR1hsHZeLKCLOy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload`,
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
          bh = await this.sd_Uny7tFUhye8slLhT(bh, parentSpanInst);
          //appendnew_next_sd_5nCrYBLIjU4rIeGR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5nCrYBLIjU4rIeGR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-users`,
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
          bh = await this.sd_9pvx0JI6XnwgF8JW(bh, parentSpanInst);
          //appendnew_next_sd_tdT1EMSloGiBqliF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tdT1EMSloGiBqliF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addSchedule`,
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
          bh = await this.sd_Hv8hlXYXwgEq7ail(bh, parentSpanInst);
          //appendnew_next_sd_YSE56pCp76017UPM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YSE56pCp76017UPM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getSchedules`,
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
          bh = await this.sd_qXUuDeCOlHPNmMlV(bh, parentSpanInst);
          //appendnew_next_sd_eSz4ihCKHawkIixS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eSz4ihCKHawkIixS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-user/:_id`,
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
          bh = await this.sd_RMj3iRyqZNP0sp6b(bh, parentSpanInst);
          //appendnew_next_sd_nit291a8f5hvYxW4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nit291a8f5hvYxW4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download/:filename`,
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
          bh = await this.sd_r5hQbbpPVNe0lQXZ(bh, parentSpanInst);
          //appendnew_next_sd_znzcslnlnxI1vsNE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_znzcslnlnxI1vsNE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Auth_HttpIn
  }
  //   service flows_Auth

  async checkIfExist(parentSpanInst, searchObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'checkIfExist',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J7XxI4RmRujgJ3nW(bh, parentSpanInst);
      //appendnew_next_checkIfExist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HQW7MlXCfXknBjYn',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_Auth_start

  async sd_J7XxI4RmRujgJ3nW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J7XxI4RmRujgJ3nW',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_PhRLzlckwjzX0TdC',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J7XxI4RmRujgJ3nW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J7XxI4RmRujgJ3nW',
        spanInst,
        'sd_J7XxI4RmRujgJ3nW'
      );
    }
  }

  async sd_0amagmwLABZ7tYYB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0amagmwLABZ7tYYB',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tKewE2bR8nh8JVXp(bh, parentSpanInst);
      //appendnew_next_sd_0amagmwLABZ7tYYB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0amagmwLABZ7tYYB',
        spanInst,
        'sd_0amagmwLABZ7tYYB'
      );
    }
  }

  async sd_tKewE2bR8nh8JVXp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tKewE2bR8nh8JVXp',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5qcKPmS8Ia4Wayao(bh, parentSpanInst);
      //appendnew_next_sd_tKewE2bR8nh8JVXp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tKewE2bR8nh8JVXp',
        spanInst,
        'sd_tKewE2bR8nh8JVXp'
      );
    }
  }

  async sd_5qcKPmS8Ia4Wayao(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5qcKPmS8Ia4Wayao',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1h0mL2FpIeKJzrRT(bh, parentSpanInst);
      } else {
        bh = await this.sd_YmweFNq5Y8KmEPDX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5qcKPmS8Ia4Wayao',
        spanInst,
        'sd_5qcKPmS8Ia4Wayao'
      );
    }
  }

  async sd_1h0mL2FpIeKJzrRT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1h0mL2FpIeKJzrRT',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_1h0mL2FpIeKJzrRT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1h0mL2FpIeKJzrRT',
        spanInst,
        'sd_1h0mL2FpIeKJzrRT'
      );
    }
  }

  async sd_GLaqJCskcCVvIO8J(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GLaqJCskcCVvIO8J');
    }
  }

  async sd_YmweFNq5Y8KmEPDX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YmweFNq5Y8KmEPDX',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_441grX9nuZchAI92(bh, parentSpanInst);
      //appendnew_next_sd_YmweFNq5Y8KmEPDX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YmweFNq5Y8KmEPDX',
        spanInst,
        'sd_YmweFNq5Y8KmEPDX'
      );
    }
  }

  async sd_441grX9nuZchAI92(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_441grX9nuZchAI92',
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
        bh = await this.sd_sC7lG9D8eBGthwno(bh, parentSpanInst);
      } else {
        bh = await this.sd_9zncwjaXbsRC9YfF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_441grX9nuZchAI92',
        spanInst,
        'sd_441grX9nuZchAI92'
      );
    }
  }

  async sd_sC7lG9D8eBGthwno(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sC7lG9D8eBGthwno',
      parentSpanInst
    );
    try {
      bh.result = bh.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_sC7lG9D8eBGthwno
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sC7lG9D8eBGthwno',
        spanInst,
        'sd_sC7lG9D8eBGthwno'
      );
    }
  }

  async sd_9zncwjaXbsRC9YfF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9zncwjaXbsRC9YfF',
      parentSpanInst
    );
    try {
      bh.result = {
        message: "Password Don't match",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_9zncwjaXbsRC9YfF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9zncwjaXbsRC9YfF',
        spanInst,
        'sd_9zncwjaXbsRC9YfF'
      );
    }
  }

  async sd_qTk50dG9TrrmireO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qTk50dG9TrrmireO',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QlBjtbaMdzxSbarv(bh, parentSpanInst);
      //appendnew_next_sd_qTk50dG9TrrmireO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qTk50dG9TrrmireO',
        spanInst,
        'sd_qTk50dG9TrrmireO'
      );
    }
  }

  async sd_QlBjtbaMdzxSbarv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QlBjtbaMdzxSbarv',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HDT4gTptFk2ZgL0P(bh, parentSpanInst);
      //appendnew_next_sd_QlBjtbaMdzxSbarv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QlBjtbaMdzxSbarv',
        spanInst,
        'sd_QlBjtbaMdzxSbarv'
      );
    }
  }

  async sd_HDT4gTptFk2ZgL0P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HDT4gTptFk2ZgL0P',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dFXWIgPCrVegxSdq(bh, parentSpanInst);
      } else {
        bh = await this.sd_ISZ5nXeIG9rRkXnw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HDT4gTptFk2ZgL0P',
        spanInst,
        'sd_HDT4gTptFk2ZgL0P'
      );
    }
  }

  async sd_dFXWIgPCrVegxSdq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dFXWIgPCrVegxSdq',
      parentSpanInst
    );
    try {
      const crypto = require('crypto');
      bh.result = bh.result[0];
      const random4Digit = crypto.randomInt(0, 10000);
      let ran = random4Digit.toString().padStart(4, '0');
      bh._id = bh.result._id;
      bh.otp = ran;

      bh.payload = {
        to: bh.input.body.email,
        subject: 'Here is your OTP',
        from: 'Dead Or Alive',
        image: `
    <p>${ran}</p>
    <img src="https://static.wikia.nocookie.net/logopedia/images/b/b1/Doa.png/revision/latest?cb=20140212160623" width="300px" height="80px"/>`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_D7Odq2VQfnJvREpL(bh, parentSpanInst);
      //appendnew_next_sd_dFXWIgPCrVegxSdq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dFXWIgPCrVegxSdq',
        spanInst,
        'sd_dFXWIgPCrVegxSdq'
      );
    }
  }

  async sd_D7Odq2VQfnJvREpL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_D7Odq2VQfnJvREpL',
      parentSpanInst
    );
    try {
      this.ran = bh.otp;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_N7IlzKvdFknHwlai(bh, parentSpanInst);
      //appendnew_next_sd_D7Odq2VQfnJvREpL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D7Odq2VQfnJvREpL',
        spanInst,
        'sd_D7Odq2VQfnJvREpL'
      );
    }
  }

  async sd_N7IlzKvdFknHwlai(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N7IlzKvdFknHwlai',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_iDQBGLLAH9RTJrO8'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.image,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Oyf9I3olPQGeRcko(bh, parentSpanInst);
      //appendnew_next_sd_N7IlzKvdFknHwlai
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N7IlzKvdFknHwlai',
        spanInst,
        'sd_N7IlzKvdFknHwlai'
      );
    }
  }

  async sd_Oyf9I3olPQGeRcko(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Oyf9I3olPQGeRcko',
      parentSpanInst
    );
    try {
      bh.result['OTP'] = bh.otp;
      bh.result['_id'] = bh._id;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst);
      //appendnew_next_sd_Oyf9I3olPQGeRcko
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Oyf9I3olPQGeRcko',
        spanInst,
        'sd_Oyf9I3olPQGeRcko'
      );
    }
  }

  async sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RSgQQDVvpt3nZ4Uz');
    }
  }

  async sd_ISZ5nXeIG9rRkXnw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ISZ5nXeIG9rRkXnw',
      parentSpanInst
    );
    try {
      bh.result = {
        message: "User doesn't exist",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst);
      //appendnew_next_sd_ISZ5nXeIG9rRkXnw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ISZ5nXeIG9rRkXnw',
        spanInst,
        'sd_ISZ5nXeIG9rRkXnw'
      );
    }
  }

  async sd_Vi6Ftg5Mf4eaD6DX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vi6Ftg5Mf4eaD6DX',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      bh.input.body['_id'] = new Date().getTime().toString();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VOv8wSN8p5pUYWBS(bh, parentSpanInst);
      //appendnew_next_sd_Vi6Ftg5Mf4eaD6DX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vi6Ftg5Mf4eaD6DX',
        spanInst,
        'sd_Vi6Ftg5Mf4eaD6DX'
      );
    }
  }

  async sd_VOv8wSN8p5pUYWBS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VOv8wSN8p5pUYWBS',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GGIZisd7JaLskPTO(bh, parentSpanInst);
      //appendnew_next_sd_VOv8wSN8p5pUYWBS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VOv8wSN8p5pUYWBS',
        spanInst,
        'sd_VOv8wSN8p5pUYWBS'
      );
    }
  }

  async sd_GGIZisd7JaLskPTO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GGIZisd7JaLskPTO',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_l3VLNTwiRt0hfYhs(bh, parentSpanInst);
      } else {
        bh = await this.sd_RzkdQbrlCEU6tOPd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GGIZisd7JaLskPTO',
        spanInst,
        'sd_GGIZisd7JaLskPTO'
      );
    }
  }

  async sd_l3VLNTwiRt0hfYhs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l3VLNTwiRt0hfYhs',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NHswfzn47DrTYCyd(bh, parentSpanInst);
      //appendnew_next_sd_l3VLNTwiRt0hfYhs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l3VLNTwiRt0hfYhs',
        spanInst,
        'sd_l3VLNTwiRt0hfYhs'
      );
    }
  }

  async sd_NHswfzn47DrTYCyd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NHswfzn47DrTYCyd');
    }
  }

  async sd_RzkdQbrlCEU6tOPd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RzkdQbrlCEU6tOPd',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      delete bh.input.body.file2;
      const hashedPassword = await bcrypt.hash(bh.input.body['password'], 10);
      bh.sendPassword = bh.input.body.password;
      bh.input.body['password'] = hashedPassword;
      bh.input.body['registeredDate'] = new Date().toLocaleDateString();
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9Gv4mFF6jdv5uacF(bh, parentSpanInst);
      //appendnew_next_sd_RzkdQbrlCEU6tOPd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RzkdQbrlCEU6tOPd',
        spanInst,
        'sd_RzkdQbrlCEU6tOPd'
      );
    }
  }

  async sd_9Gv4mFF6jdv5uacF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Gv4mFF6jdv5uacF',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_PhRLzlckwjzX0TdC',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendEmail(bh, parentSpanInst);
      //appendnew_next_sd_9Gv4mFF6jdv5uacF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Gv4mFF6jdv5uacF',
        spanInst,
        'sd_9Gv4mFF6jdv5uacF'
      );
    }
  }

  async sendEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    try {
      bh.status = 200;
      bh.payload = {
        to: bh.input.body.email,
        subject: 'Dead Or Alive Client Registered',
        from: 'DOAServices',
        ptag: `<p>Your registration with DOA was successful.</p>
    <p>Your Password to login is: ${bh.sendPassword}</p>
    `,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ddrss31Z9FJ8M00y(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ezfnqsCbpcYJsGed',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sd_ddrss31Z9FJ8M00y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ddrss31Z9FJ8M00y',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_HkTnnT8uG4AOwNsg'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.ptag,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NHswfzn47DrTYCyd(bh, parentSpanInst);
      //appendnew_next_sd_ddrss31Z9FJ8M00y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ddrss31Z9FJ8M00y',
        spanInst,
        'sd_ddrss31Z9FJ8M00y'
      );
    }
  }

  async sd_7iqbrRi94DLel100(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7iqbrRi94DLel100',
      parentSpanInst
    );
    try {
      bh.numbers = this.ran;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DGG4LLEBZeopniH6(bh, parentSpanInst);
      //appendnew_next_sd_7iqbrRi94DLel100
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7iqbrRi94DLel100',
        spanInst,
        'sd_7iqbrRi94DLel100'
      );
    }
  }

  async sd_DGG4LLEBZeopniH6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DGG4LLEBZeopniH6',
      parentSpanInst
    );
    try {
      console.log('Code', bh.numbers);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a8aRF6GJPMFq5Ah8(bh, parentSpanInst);
      //appendnew_next_sd_DGG4LLEBZeopniH6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DGG4LLEBZeopniH6',
        spanInst,
        'sd_DGG4LLEBZeopniH6'
      );
    }
  }

  async sd_a8aRF6GJPMFq5Ah8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a8aRF6GJPMFq5Ah8',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.numbers,
          bh.input.body.otp,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_r5I0lxAnr4C66KOp(bh, parentSpanInst);
      } else {
        bh = await this.sd_jYZ9JoRxCABGqSaH(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a8aRF6GJPMFq5Ah8',
        spanInst,
        'sd_a8aRF6GJPMFq5Ah8'
      );
    }
  }

  async sd_r5I0lxAnr4C66KOp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r5I0lxAnr4C66KOp',
      parentSpanInst
    );
    try {
      console.log('OTP match');
      bh.result = {
        message: 'OTP match',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SaFaBGimJqBKdRM3(bh, parentSpanInst);
      //appendnew_next_sd_r5I0lxAnr4C66KOp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r5I0lxAnr4C66KOp',
        spanInst,
        'sd_r5I0lxAnr4C66KOp'
      );
    }
  }

  async sd_SaFaBGimJqBKdRM3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SaFaBGimJqBKdRM3');
    }
  }

  async sd_jYZ9JoRxCABGqSaH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jYZ9JoRxCABGqSaH',
      parentSpanInst
    );
    try {
      console.log("OTP dn't match");
      bh.result = {
        message: 'wrong OTP',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SaFaBGimJqBKdRM3(bh, parentSpanInst);
      //appendnew_next_sd_jYZ9JoRxCABGqSaH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jYZ9JoRxCABGqSaH',
        spanInst,
        'sd_jYZ9JoRxCABGqSaH'
      );
    }
  }

  async sd_Z00H3cmNCcGccaBK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z00H3cmNCcGccaBK',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      const updateData = { ...bh.input.body };
      delete updateData._id;
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      bh.filter = { _id: bh.input.params._id };
      updateData.password = hashedPassword;
      bh.body = { $set: updateData };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iMZJWHUSIo0Wev4k(bh, parentSpanInst);
      //appendnew_next_sd_Z00H3cmNCcGccaBK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z00H3cmNCcGccaBK',
        spanInst,
        'sd_Z00H3cmNCcGccaBK'
      );
    }
  }

  async sd_iMZJWHUSIo0Wev4k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iMZJWHUSIo0Wev4k',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().updateOne(
        'sd_PhRLzlckwjzX0TdC',
        'users',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ytCLx3JUC7a25ZUy(bh, parentSpanInst);
      //appendnew_next_sd_iMZJWHUSIo0Wev4k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iMZJWHUSIo0Wev4k',
        spanInst,
        'sd_iMZJWHUSIo0Wev4k'
      );
    }
  }

  async sd_ytCLx3JUC7a25ZUy(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ytCLx3JUC7a25ZUy');
    }
  }

  async sd_Uny7tFUhye8slLhT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uny7tFUhye8slLhT',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.file[0];
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5u8G7H5vbCc0Dpfg(bh, parentSpanInst);
      //appendnew_next_sd_Uny7tFUhye8slLhT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uny7tFUhye8slLhT',
        spanInst,
        'sd_Uny7tFUhye8slLhT'
      );
    }
  }

  async sd_5u8G7H5vbCc0Dpfg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5u8G7H5vbCc0Dpfg',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_PhRLzlckwjzX0TdC',
        'files',
        bh.file.path,
        bh.file.filename,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GsY7hPXdfWag0rXM(bh, parentSpanInst);
      //appendnew_next_sd_5u8G7H5vbCc0Dpfg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5u8G7H5vbCc0Dpfg',
        spanInst,
        'sd_5u8G7H5vbCc0Dpfg'
      );
    }
  }

  async sd_GsY7hPXdfWag0rXM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GsY7hPXdfWag0rXM');
    }
  }

  async sd_9pvx0JI6XnwgF8JW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9pvx0JI6XnwgF8JW',
      parentSpanInst
    );
    try {
      bh.collection = 'users';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3bZ0dL716E4LAo89(bh, parentSpanInst);
      //appendnew_next_sd_9pvx0JI6XnwgF8JW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9pvx0JI6XnwgF8JW',
        spanInst,
        'sd_9pvx0JI6XnwgF8JW'
      );
    }
  }

  async sd_3bZ0dL716E4LAo89(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3bZ0dL716E4LAo89',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_PhRLzlckwjzX0TdC',
        bh.collection,
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_snCk70oGAdIiyX1S(bh, parentSpanInst);
      //appendnew_next_sd_3bZ0dL716E4LAo89
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3bZ0dL716E4LAo89',
        spanInst,
        'sd_3bZ0dL716E4LAo89'
      );
    }
  }

  async sd_snCk70oGAdIiyX1S(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_snCk70oGAdIiyX1S');
    }
  }

  async sd_Hv8hlXYXwgEq7ail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hv8hlXYXwgEq7ail',
      parentSpanInst
    );
    try {
      bh.input.body['_id'] = new Date().getTime();
      bh.event = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_67u8XiPDpUOO9g8t(bh, parentSpanInst);
      //appendnew_next_sd_Hv8hlXYXwgEq7ail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hv8hlXYXwgEq7ail',
        spanInst,
        'sd_Hv8hlXYXwgEq7ail'
      );
    }
  }

  async sd_67u8XiPDpUOO9g8t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_67u8XiPDpUOO9g8t',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_PhRLzlckwjzX0TdC',
        'schedules',
        bh.event,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IZKI57INX67m4XpQ(bh, parentSpanInst);
      //appendnew_next_sd_67u8XiPDpUOO9g8t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_67u8XiPDpUOO9g8t',
        spanInst,
        'sd_67u8XiPDpUOO9g8t'
      );
    }
  }

  async sd_IZKI57INX67m4XpQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IZKI57INX67m4XpQ');
    }
  }

  async sd_qXUuDeCOlHPNmMlV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qXUuDeCOlHPNmMlV',
      parentSpanInst
    );
    try {
      bh.collection = 'schedules';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sm2nID6Hec6N9viE(bh, parentSpanInst);
      //appendnew_next_sd_qXUuDeCOlHPNmMlV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXUuDeCOlHPNmMlV',
        spanInst,
        'sd_qXUuDeCOlHPNmMlV'
      );
    }
  }

  async sd_sm2nID6Hec6N9viE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sm2nID6Hec6N9viE',
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
      await this.sd_vkYXatluSE0gu38L(bh, parentSpanInst);
      //appendnew_next_sd_sm2nID6Hec6N9viE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sm2nID6Hec6N9viE',
        spanInst,
        'sd_sm2nID6Hec6N9viE'
      );
    }
  }

  async sd_vkYXatluSE0gu38L(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vkYXatluSE0gu38L');
    }
  }

  async sd_RMj3iRyqZNP0sp6b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RMj3iRyqZNP0sp6b',
      parentSpanInst
    );
    try {
      const updateData = { ...bh.input.body };
      delete updateData._id;
      bh.filter = { _id: bh.input.params._id };
      bh.body = { $set: updateData };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_b10YqB3fYvJNtU0I(bh, parentSpanInst);
      //appendnew_next_sd_RMj3iRyqZNP0sp6b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RMj3iRyqZNP0sp6b',
        spanInst,
        'sd_RMj3iRyqZNP0sp6b'
      );
    }
  }

  async sd_b10YqB3fYvJNtU0I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b10YqB3fYvJNtU0I',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().updateOne(
        'sd_PhRLzlckwjzX0TdC',
        'users',
        bh.input.params,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5rWnAHoOPX5HGrGC(bh, parentSpanInst);
      //appendnew_next_sd_b10YqB3fYvJNtU0I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b10YqB3fYvJNtU0I',
        spanInst,
        'sd_b10YqB3fYvJNtU0I'
      );
    }
  }

  async sd_5rWnAHoOPX5HGrGC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5rWnAHoOPX5HGrGC');
    }
  }

  async sd_r5hQbbpPVNe0lQXZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r5hQbbpPVNe0lQXZ',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_PhRLzlckwjzX0TdC',
        'files',
        bh.input.params,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bDxNmjojBfqsvXv6(bh, parentSpanInst);
      //appendnew_next_sd_r5hQbbpPVNe0lQXZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r5hQbbpPVNe0lQXZ',
        spanInst,
        'sd_r5hQbbpPVNe0lQXZ'
      );
    }
  }

  async sd_bDxNmjojBfqsvXv6(bh, parentSpanInst) {
    try {
      bh.web.res.set({ 'Content-Type': 'image/png' });

      bh.result.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bDxNmjojBfqsvXv6');
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
  //appendnew_flow_Auth_Catch
}
