import Router from 'express';
import ErrorController from '../controllers/ErrorController.js';
const routerError = new Router();

routerError.get('/errors', ErrorController.ReadErrors);
routerError.post('/errors', ErrorController.CreateErrors);
routerError.get('/errors/:id', ErrorController.ReadOneProject);

routerError.get('/criticals', ErrorController.ReadCriticals);
routerError.get('/last24', ErrorController.ReadLast24);

routerError.get('/last10critial', ErrorController.ReadLast10Criticals );
routerError.get('/chart/criticals', ErrorController.CriticalYear);
routerError.get('/chart/:id', ErrorController.charId);



export default routerError