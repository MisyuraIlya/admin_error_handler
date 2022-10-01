import Router from 'express';
// import { router } from 'json-server';
import ExecuteController from '../controllers/execute-controller.js'
import ErrorController from '../controllers/error-controller.js';
const routerExecuter = new Router();

routerExecuter.get('/crons',ErrorController.ReadAllProjects)
routerExecuter.get('/cronjob', ExecuteController.ReadTest);
routerExecuter.get('/crons/:id', ExecuteController.ReadCronList);
routerExecuter.get('/last10crons', ExecuteController.ReadLast10Crons);

export default routerExecuter