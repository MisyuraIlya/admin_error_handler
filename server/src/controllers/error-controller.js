import ErrorService from "../service/error-service.js";

const sendResponse = (response , data = null) => {
    return response
    .set("Content-Range", data.response.length )
    .json(data.response);
}

  class ErrorController {

    async ReadErrors(request, response) {
        try{   
          const result = await ErrorService.ReadErrors()
          response.json(result)
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
      try{   
        const result = await ErrorService.ReadAllProjects()
        sendResponse(response, result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadOneProject(request, response){
      try{   
        const {id} = request.params
        const result = await ErrorService.ReadOneProject(id)
        sendResponse(response, result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
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
      try{   
        const result = await ErrorService.ReadCriticals()
        sendResponse(response,result)
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadLast24(request, response){
      try{   
        const result = await ErrorService.ReadLast24()
        sendResponse(response,result)
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }


  }
  
  
  export default new ErrorController();