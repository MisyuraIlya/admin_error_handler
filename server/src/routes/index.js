import Router from 'express';
import ErrorController from '../controllers/error-controller.js';
const routerError = new Router();

routerError.get('/errors', ErrorController.ReadErrors);
routerError.post('/errors', ErrorController.CreateErrors);
routerError.get('/clients', ErrorController.ReadAllProjects);
routerError.get('/projects/:id', ErrorController.ReadOneProject);
routerError.post('/clients', ErrorController.CreateProject);

routerError.get('/criticals', ErrorController.ReadCriticals);
routerError.get('/last24', ErrorController.ReadLast24);

export default routerError