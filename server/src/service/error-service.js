import ErrorMysqlFactory from '../classes/factory.js'

class ErrorService {


    async ReadErrors(){

        const result = await ErrorMysqlFactory.ReadErrors();
        return { response:result };
    }

    async CreateError(project,title,code,status,description){

        const result = await ErrorMysqlFactory.CreateError(project,title,code,status,description);
        
        return { response:result };
    }

    async ReadAllProjects(){
        const result = await ErrorMysqlFactory.ReadAllProjects();
        return { response: result }
    }

    async ReadOneProject(id){
        const result = await ErrorMysqlFactory.ReadOneProject(id);
        return { response: result }
    }

    async CreateProject(title){

        const result = await ErrorMysqlFactory.CreateProject(title);
        
        return { response:result };
    }


}

export default new ErrorService();