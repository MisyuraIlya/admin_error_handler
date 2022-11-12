import { json } from 'express';
import ClientFactory from '../DAL/ClientFactory.js';

class ClientService {

    async ReadAllProjects(firstNum, secondNum, searchFilter){
        const result = await ClientFactory.ReadAllProjects(firstNum, secondNum, searchFilter);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }
    
    async CreateProject(title,image,develop_mode){
        let mode = 0;
        if(develop_mode){
            mode = 1
        }
        const result = await ClientFactory.CreateProject(title,image,mode);
        const findProd = await ClientFactory.FindOneProject(title);

        return { response:findProd };
    }

    async ModeHandler(id,mode){
        const result = await ClientFactory.ModeHandler(id,mode);
        
        return { response:result };
    }

}

export default new ClientService();