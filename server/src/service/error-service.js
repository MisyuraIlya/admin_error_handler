import ErrorMysqlFactory from '../classes/factory.js'

class ErrorService {


    async ReadErrors(){

        const result = await ErrorMysqlFactory.ReadErrors();
        return { response:result };
    }

}

export default new ErrorService();