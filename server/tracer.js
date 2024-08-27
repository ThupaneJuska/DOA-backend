const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb');
const { Resource } = require('@opentelemetry/resources');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

const { config } = require('dotenv');
const { sep } = require('path');
const envFileName = process.env.NEUTRINOS_APP_ENV ? `${process.env.NEUTRINOS_APP_ENV}.env` : 'dev.env';
const envFilePath = `${process.cwd()}${sep}environments${sep}${envFileName}`;
console.log('env-file-path', envFilePath);
config({ path: envFilePath });

const provider = new NodeTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: process.env.NEU_APP_NAME,
    }),
});

const exporter = new ConsoleSpanExporter();
const processor = new SimpleSpanProcessor(exporter);
provider.addSpanProcessor(processor);

const collectorTraceExporter = new OTLPTraceExporter({
    url: process.env.NEU_TRACE_COLLECTOR_URL,
});
const collectorProvider = new SimpleSpanProcessor(collectorTraceExporter);
provider.addSpanProcessor(collectorProvider);
provider.register();

registerInstrumentations({
    instrumentations: [
        getNodeAutoInstrumentations({
            '@opentelemetry/instrumentation-fs': {
                enabled: false,
              }
        }),
        new ExpressInstrumentation(),
        new MongoDBInstrumentation({
            enhancedDatabaseReporting: true,
        }),
    ],
});
