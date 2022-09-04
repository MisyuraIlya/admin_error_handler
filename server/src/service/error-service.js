import { json } from 'express';
import ErrorMysqlFactory from '../classes/factory.js'

class ErrorService {


    async ReadErrors(){

        const result = await ErrorMysqlFactory.ReadErrors();
        return { response:result };
    }

    async CreateError(project,title,code,status,description,response, body, language){

        const result = await ErrorMysqlFactory.CreateError(project,title,code,status,description, response, body, language);
        
        return { response:result };
    }

    async ReadAllProjects(){
        const result = await ErrorMysqlFactory.ReadAllProjects();
        return { response: result }
    }
    
    async ReadOneProject(id){
        const getId = await ErrorMysqlFactory.ReadOneProject(id);
        const result = await ErrorMysqlFactory.GetErrorsPerProject(getId[0].title)
        return { response: result }
    }

    async CreateProject(title){

        const result = await ErrorMysqlFactory.CreateProject(title);
        
        return { response:result };
    }

    async ReadCriticals(){
        const result = await ErrorMysqlFactory.ReadCriticals();
        return { response:result };
    }

    async ReadLast24(){
        const result = await ErrorMysqlFactory.ReadLast24();
        return { response:result };
    }


}

export default new ErrorService();