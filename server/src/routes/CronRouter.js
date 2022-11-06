import Router from 'express';
// import { router } from 'json-server';
import CronController from '../controllers/CronController.js'
// import ErrorController from '../controllers/ErrorController.js';
const routerCron = new Router();

// routerCron.get('/crons',ErrorController.ReadAllProjects)
routerCron.get('/cronjob', CronController.ReadTest);
routerCron.get('/crons/:id', CronController.ReadCronList);
routerCron.get('/last10crons', CronController.ReadLast10Crons);

export default routerCron