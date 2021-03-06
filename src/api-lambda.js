/* istanbul ignore file */
import awsServerlessExpress from 'aws-serverless-express';
import Api from './api';

// Creates an express app (with parameter store)
const api = new Api()
  .attachParameterStore()
  .attachApi()
  .attachErrorHandler();

// Creates a AWS serverless express server
const server = awsServerlessExpress.createServer(api.express);

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
