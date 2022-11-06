import Router from 'express';
import ClientController from '../controllers/ClientController.js';
const routerClient = new Router();

routerClient.get('/clients', ClientController.ReadAllProjects);
routerClient.post('/clients', ClientController.CreateProject);


export default routerClient