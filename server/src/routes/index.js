import Router from 'express';
import ErrorController from '../controllers/error-controller.js';
const routerError = new Router();

routerError.get('/errors', ErrorController.ReadErrors);


export default routerError