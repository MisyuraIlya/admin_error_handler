import ErrorService from "../service/error-service.js";

const sendResponse = (response , data = null, firstNum = null, secondNum = null) => {
    return response
    .set("Content-Range", `erros 0-4/${data.total}` )
    .json(data.response);
}

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
          sendResponse(response,result);
        } catch (error) {
          console.log(error)
          response.sendStatus(500);
        }
    }

    async CreateErrors(request, response){
      try{
        const {project,title,code,status,description, response, body, language} = request.body;
        const result = await ErrorService.CreateError(project,title,code,status,description,response, body,language)
        sendResponse(response,200,'succsess');
      }catch (error){
        console.log(error)
      }
    }

    async ReadAllProjects(request, response){
      const params = request.query.range;
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
      let PageIndex = firstNum;
      let TotalRows = range(firstNum, secondNum).length;
      const searchFilter = JSON.parse(request.query.filter).q
      try{   
        // const result = await ErrorService.ReadAllProjects(firstNum, secondNum, TotalRows,PageIndex, searchFilter)
        const result = await ErrorService.ReadAllProjects(TotalRows,PageIndex, searchFilter)
        console.log(result)
        sendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadOneProject(request, response){
      try{   
        const {id} = request.params;
        const params = request.query.range;
        const searchFilter = JSON.parse(request.query.filter).q
        const firstNum = params.split(/\,|\s|\[|\]/)[1]
        const secondNum = params.split(/\,|\s|\[|\]/)[2]
        const dateFrom = JSON.parse(request.query.filter).date_gte
        const dateTo = JSON.parse(request.query.filter).date_lte
        let PageIndex = firstNum;
        let TotalRows = range(firstNum, secondNum).length;
        const result = await ErrorService.ReadOneProject(id,TotalRows,PageIndex, searchFilter, dateFrom, dateTo )
        sendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadLast10Criticals(request, response){
      try{
        const result = await ErrorService.ReadLast10Criticals()
        sendResponse(response,result);
      }catch (error){
        console.log(error)
      }
    }

    async CreateProject(request, response){
      try{   
        const {title} = request.body;
        const result = await ErrorService.CreateProject(title)
        sendResponse(response,result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
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
        sendResponse(response, result,firstNum, secondNum );
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
        sendResponse(response, result,firstNum, secondNum )
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async AllWeek(request, response){
      try{   
        const result = await ErrorService.AllWeek()
        sendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      }
    }


    async CriticalYear(request, response){
      try{   
        const result = await ErrorService.CriticalYear()
        sendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      } 
    }

    async charId(request, response){
      const {id} = request.params;
      try{   
        const result = await ErrorService.charId(id)
        sendResponse(response,result)
      } catch (error) {
        response.sendStatus(500);
      } 
    }




  }
  
  
  export default new ErrorController();