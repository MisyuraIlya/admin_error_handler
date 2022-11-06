import { json } from 'express';
import ClientFactory from '../DAL/ClientFactory.js';

class ClientService {

    async ReadAllProjects(firstNum, secondNum, searchFilter){
        const result = await ClientFactory.ReadAllProjects(firstNum, secondNum, searchFilter);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }
    
    async CreateProject(title){

        const result = await ClientFactory.CreateProject(title);
        
        return { response:result };
    }

}

export default new ClientService();