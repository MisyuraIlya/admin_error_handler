import db from "../db";

function query(sql, params) {
    return new Promise((resolve, reject) => {
      db.query(sql, params, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }


  class TodoMysql {
    constructor() {

    }

    async readTodo(status, limit, page){
        let sql = 'SELECT COUNT(_id) AS count FROM todo_list WHERE status = ?';
        const result = await query(sql, status);
        if(result[0].count  > 0){
          const total = result[0].count;
          const numberOfPages = Math.ceil(total / limit);
          if (page > numberOfPages) {
               throw ApiError.BadRequest(`no data found`)
          }
          if (page > numberOfPages) {
            response.redirect(`/api/todos?page=${encodeURIComponent(numberOfPages)}`);
          } else if (page < 1) {
            response.redirect(`/api/todos?page=${encodeURIComponent('1')}`);
          }
          const startingLimit = (page - 1) * limit;
          sql = `SELECT * FROM todo_list WHERE status = ? LIMIT ${startingLimit},${limit} `;
          const todos = await query(sql, status);
          return { todos, total}
        } else {
            throw ApiError.BadRequest(`no data found`)
        }
    }
    async createTodo(title, description){
        const _id = uuidv4();
        const ended = null;
        const status = 'ACTIVE';
        const sql = 'INSERT INTO todo_list (_id, title, created, ended, description, status) VALUES (?, ?, now(), ?, ?, ?)';
        const response = await query(sql, [_id, title, ended, description, status]);
        return response
    }
    async createSubTodo(parentid, subdescription){
        const _id = uuidv4();
        const ended = null;
        const status = 'ACTIVE';
        const sql = 'INSERT INTO todo_sub (_id, parentid, created, ended, subdescription, status) VALUES (?, ?, now(), ?, ?, ?)';
        const result = await query(sql, [_id, parentid, ended, subdescription, status]);
        return result
    }
    async readTodoSubHistory(){
        const sql = 'SELECT * FROM todo_sub ;';
        const result = await query(sql);
        return result
    }
    async readSubtodosPerId(id){
        if (uuidValidate(id)) {
          const sql = 'SELECT * FROM todo_sub WHERE parentid  = ?';
          const result = await query(sql, id);
        return result
        } else {
            throw ApiError.BadRequest(`no data found`)
        }
    }
    async updateTodos(_id){
        if (uuidValidate(_id)) {
          const sql = 'UPDATE todo_list SET status = \'DONE\' , ended = now()  WHERE _id = ? ; ';
          const result = await query(sql, _id);
        return result
        } else {
          throw ApiError.BadRequest(`no data found`)
        }
    }
    async updateSubtodos(_id,status){
        if (status === 'DONE') {
          const sql = 'UPDATE todo_sub SET status = ? , ended = now()  WHERE _id = ? ; ';
          const result = await query(sql, [status, _id]);
        return result
        } else {
          const sql = 'UPDATE todo_sub SET status = ? , ended = null  WHERE _id = ? ; ';
          const result = await query(sql, [status, _id]);
        return result
        }
    }
    async deleteTodo(_id){
        if (uuidValidate(_id)) {
          const sql = 'DELETE FROM todo_list WHERE _id = ?';
          const result = await query(sql, _id);
        return result
        } else {
        throw ApiError.BadRequest(`no data found`)
        }
    }
    async deleteSubtodo(_id){
        if (uuidValidate(_id)) {
          const sql = 'DELETE FROM todo_sub WHERE _id = ?';
          const result = await query(sql, _id);
        return result
        } else {
        throw ApiError.BadRequest(`no data found`)
        }
    }
}




export default new TodoMysql();