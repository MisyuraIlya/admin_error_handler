import ExecuteService from "../service/execute-service.js";

const sendResponse = (response , data = null, firstNum = null, secondNum = null) => {
      return response
      .set("Content-Range", `erros 0-4/${data.total}` )
      .json(data.response);
}

  const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);


  class ExecuteController {

    async ReadTest(request, response) {
      try{   
        const result = await ExecuteService.ReadTest()
        sendResponse(response,result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadCronList(request, response) {
      const {id} = request.params;
      const params = request.query.range;
      const searchFilter = JSON.parse(request.query.filter).c
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
      const dateFrom = JSON.parse(request.query.filter).cron_date_gte
      const dateTo = JSON.parse(request.query.filter).cron_date_lte
      let PageIndex = firstNum;
      let TotalRows = range(firstNum, secondNum).length;

      try{   
        const result = await ExecuteService.ReadCronList(id,TotalRows,PageIndex, searchFilter, dateFrom, dateTo,firstNum,secondNum)
        sendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadLast10Crons (request, response){
      try{   
        const result = await ExecuteService.ReadLast10Crons()
        sendResponse(response, result );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

  }
  
  
  export default new ExecuteController();
