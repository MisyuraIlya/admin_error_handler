import ErrorService from "../service/error-service.js";
function sendResponse(response, data = null, status = null, error = null) {
    return response.status(httpStatusCodes.status[status]).json({ status: httpStatusCodes.status[status], data, error });
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

  }
  
  export default new ErrorController();