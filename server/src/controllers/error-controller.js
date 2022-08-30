function sendResponse(response, data = null, status = null, error = null) {
    return response.status(httpStatusCodes.status[status]).json({ status: httpStatusCodes.status[status], data, error });
  }

  class todoController {

    async CreateError(request, response) {
  
      try{
        const {title,description} = request.body;
        const result = await todoService.CreateTodo(title, description)
        sendResponse(response, result, 'OK', null);
      }catch(e) {
        sendResponse(response, null, 'BAD_REQUEST', e);
      }
    }
  
  
    async ReadErrors(request, response) {
        try{
              const { page = 1, limit = 2, status} = request.query;
              const result = await todoService.ReadTodos(page, limit, status)
              const data = result.response
              const total = result.total
              sendResponse(response, {total: total, limit: limit, data}, 'OK', null);
          } catch (error) {
              sendResponse(response, null, 'BAD_REQUEST', error);
          }
    }
  
  
    async ReadOneError(request, response) {
        try{
              const {id} = request.params
              const result = await todoService.ReadSubtodosPerId(id)
              sendResponse(response, result, 'OK', null);
          } catch (error) {
              sendResponse(response, null, 'BAD_REQUEST', error);
          }
    }
  
  }
  
  export default new todoController();