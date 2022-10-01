import { json } from 'express';
import ErrorMysqlFactory from '../classes/factory.js'

class ErrorService {


    async ReadErrors(firstNum,secondNum){
        const result = await ErrorMysqlFactory.ReadAllErrors(firstNum,secondNum);
        return { response:result };
    }

    async CreateError(project,title,code,status,description,response, body, language){

        const result = await ErrorMysqlFactory.CreateError(project,title,code,status,description, response, body, language);
        
        return { response:result };
    }

    async ReadAllProjects(firstNum, secondNum, searchFilter){
        const result = await ErrorMysqlFactory.ReadAllProjects(firstNum, secondNum, searchFilter);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }
    
    async ReadOneProject(id, firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const getId = await ErrorMysqlFactory.ReadOneProject(id);
        const result = await ErrorMysqlFactory.GetErrorsPerProject(getId[0].title,firstNum,secondNum, searchFilter, dateFrom, dateTo)
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }

    async CreateProject(title){

        const result = await ErrorMysqlFactory.CreateProject(title);
        
        return { response:result };
    }

    async ReadCriticals(firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const result = await ErrorMysqlFactory.ReadCriticals(firstNum, secondNum, searchFilter, dateFrom, dateTo);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }

    async ReadLast24(firstNum, secondNum, searchFilter, dateFrom, dateTo){
        const result = await ErrorMysqlFactory.ReadLast24(firstNum, secondNum, searchFilter, dateFrom, dateTo);
        let total = Object.values(result.total[0])[0]
        return { response: result.result, total:total }
    }

    async CriticalYear(){
      const result = await ErrorMysqlFactory.CriticalYear();
      return { response:result };
    }
  
    async charId(id){
      const nameProject = await ErrorMysqlFactory.ReadOneProject(id);
      const result = await ErrorMysqlFactory.charId(nameProject);
      return { response:result };
    }

    async ReadLast10Criticals(){
        const result = await ErrorMysqlFactory.ReadLast10Criticals();
        return { response:result };   
    }

}

export default new ErrorService();