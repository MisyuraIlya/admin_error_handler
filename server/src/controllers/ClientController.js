import ClientService from "../service/ClientService.js";
import SendResponse from "../Classes/SendResponse.js";


const range = (start, end, length = end - start + 1) =>
Array.from({ length }, (_, i) => start + i);

  class ClientController{

    async ReadAllProjects(request, response){
      const params = request.query.range;
      const firstNum = params.split(/\,|\s|\[|\]/)[1]
      const secondNum = params.split(/\,|\s|\[|\]/)[2]
      let PageIndex = firstNum;
      let TotalRows = range(firstNum, secondNum).length;
      const searchFilter = JSON.parse(request.query.filter).q
      try{   
        const result = await ClientService.ReadAllProjects(TotalRows,PageIndex, searchFilter)
        SendResponse(response, result,firstNum, secondNum );
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async CreateProject(request, response){
      try{   
        const {title} = request.body;
        const result = await ClientService.CreateProject(title)
        SendResponse(response,result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

  }
  
  
  export default new ClientController();