import Router from 'express';
import ErrorController from '../controllers/error-controller.js';
const routerError = new Router();

routerError.get('/errors', ErrorController.ReadErrors);
routerError.post('/errors', ErrorController.CreateErrors);
routerError.get('/projects', ErrorController.ReadAllProjects);
routerError.get('/projects/:id', ErrorController.ReadOneProject);
routerError.post('/projects', ErrorController.CreateProject);
export default routerError