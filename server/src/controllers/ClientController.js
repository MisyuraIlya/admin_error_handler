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
        const {title,image,develop_mode} = request.body;
        const result = await ClientService.CreateProject(title,image,develop_mode)
        let res = {
          response: {
              id:result.response[0].id,
              title:result.response[0].title,
              image:result.response[0].image,
              develop_mode:result.response[0].develop_mode
          }
        }
        SendResponse(response,res);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ModeHandler(request, response){
      try{
        const {id} = request.params;
        const {mode} = request.body;
        const result = await ClientService.ModeHandler(id,mode)
        SendResponse(response,result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

  }
  
  
  export default new ClientController();