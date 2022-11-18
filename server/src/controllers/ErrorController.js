import ErrorService from "../service/ErrorService.js";
import SendResponse from "../Classes/SendResponse.js";


const range = (start, end, length = end - start + 1) =>
Array.from({ length }, (_, i) => start + i);

  class ErrorController {

    async ReadErrors(request, response) {
      const limit = request.query.limit || 10;
      const params = request.query.range;
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
        try{   
          const result = await ErrorService.ReadErrors(firstNum,secondNum)
          SendResponse(response,result);
        } catch (error) {
          console.log(error)
          response.sendStatus(500);
        }
    }

    async CreateErrors(request, responseFunc){
      try{
        const {project,title,code,status,description, response, body, language} = request.body;
        const result = await ErrorService.CreateError(project,title,code,status,description,response, body,language)
        SendResponse(responseFunc, result);
      }catch (error){
        console.log(error)
      }
    }

    async ReadOneProject(request, response){
      try{   
        let develop_mode = request.query.filter
        develop_mode = JSON.parse(develop_mode).develop_mode
        const {id} = request.params;
        const params = request.query.range;
        const searchFilter = JSON.parse(request.query.filter).q
        const firstNum = params.split(/\,|\s|\[|\]/)[1]
        const secondNum = params.split(/\,|\s|\[|\]/)[2]
        const dateFrom = JSON.parse(request.query.filter).date_gte
        const dateTo = JSON.parse(request.query.filter).date_lte
        let PageIndex = firstNum;
        let TotalRows = range(firstNum, secondNum).length;
        const result = await ErrorService.ReadOneProject(id,TotalRows,PageIndex, searchFilter, dateFrom, dateTo,develop_mode )
        SendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadLast10Criticals(request, response){
      try{
        const result = await ErrorService.ReadLast10Criticals()
        SendResponse(response,result);
      }catch (error){
        console.log(error)
      }
    }

    async ReadCriticals(request, response){
      const params = request.query.range;
      const searchFilter = JSON.parse(request.query.filter).q
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
      const dateFrom = JSON.parse(request.query.filter).date_gte
      const dateTo = JSON.parse(request.query.filter).date_lte
      let PageIndex = firstNum;
      let TotalRows = range(firstNum, secondNum).length;
      try{   
        const result = await ErrorService.ReadCriticals(TotalRows,PageIndex, searchFilter, dateFrom, dateTo)
        SendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadLast24(request, response){
      const params = request.query.range;
      const searchFilter = JSON.parse(request.query.filter).q
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
      const dateFrom = JSON.parse(request.query.filter).date_gte
      const dateTo = JSON.parse(request.query.filter).date_lte
      let PageIndex = firstNum;
      let TotalRows = range(firstNum, secondNum).length;

      try{   
        const result = await ErrorService.ReadLast24(TotalRows,PageIndex, searchFilter, dateFrom, dateTo)
        SendResponse(response, result,firstNum, secondNum )
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async AllWeek(request, response){
      try{   
        const result = await ErrorService.AllWeek()
        SendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      }
    }

    async CriticalYear(request, response){
      try{   
        const result = await ErrorService.CriticalYear()
        SendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      } 
    }

    async charId(request, response){
      const {id} = request.params;
      try{   
        const result = await ErrorService.charId(id)
        SendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      } 
    }
  }
  
  
  export default new ErrorController();