import { json } from 'express';
import ErrorFactory from '../DAL/ErrorFactory.js';
import ClientFactory from '../DAL/ClientFactory.js';

class ErrorService {


    async ReadErrors(firstNum,secondNum){
        const result = await ErrorFactory.ReadAllErrors(firstNum,secondNum);
        return { response:result };
    }

    async CreateError(project,title,code,status,description,response, body, language){

        let responseData = null;
        const result = await ErrorFactory.CreateError(project,title,code,status,description, response, body, language);
        const findProject = await ClientFactory.FindOneProject(project)
        if(findProject.length > 0){
            responseData = result
        } else {
            responseData = 'No project found, create first project'
        }
        return { response:responseData };
    }


    
    async ReadOneProject(id, firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const getId = await ErrorFactory.ReadOneProject(id);
        const result = await ErrorFactory.GetErrorsPerProject(getId[0].title,firstNum,secondNum, searchFilter, dateFrom, dateTo)
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }



    async ReadCriticals(firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const result = await ErrorFactory.ReadCriticals(firstNum, secondNum, searchFilter, dateFrom, dateTo);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }

    async ReadLast24(firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const result = await ErrorFactory.ReadLast24(firstNum, secondNum, searchFilter, dateFrom, dateTo);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }

    async CriticalYear(){
      const result = await ErrorFactory.CriticalYear();
      return { response:result };
    }
  
    async charId(id){
      const nameProject = await ErrorFactory.ReadOneProject(id);
      const result = await ErrorFactory.charId(nameProject);
      return { response:result };
    }

    async ReadLast10Criticals(){
        const result = await ErrorFactory.ReadLast10Criticals();
        return { response:result };   
    }

}

export default new ErrorService();