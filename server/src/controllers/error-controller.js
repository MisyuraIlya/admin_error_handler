import ErrorService from "../service/error-service.js";

const sendResponse = (response , code, status , data = null) => {
    return response.status(code).json({ data:data , status: status });
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
        const {project,title,code,status,description} = request.body;
        const result = await ErrorService.CreateError(project,title,code,status,description)
        sendResponse(response,200,'succsess');
      }catch (error){
        console.log(error)
      }
    }

    async ReadAllProjects(request, response){
      try{   
        const result = await ErrorService.ReadAllProjects()
        sendResponse(response,200,'succsess', result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async ReadOneProject(request, response){
      try{   
        const {id} = request.params
        const result = await ErrorService.ReadOneProject(id)
        sendResponse(response,200,'succsess', result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }

    async CreateProject(request, response){
      try{   
        const {title} = request.body;
        const result = await ErrorService.CreateProject(title)
        sendResponse(response,200,'succsess', result);
      } catch (error) {
        console.log(error)
        response.sendStatus(500);
      }
    }


  }
  
  
  export default new ErrorController();