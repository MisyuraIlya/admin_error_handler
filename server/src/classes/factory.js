import db from "../db/config.js";

function query(sql,params) {
    return new Promise((resolve, reject) => {
      db.query(sql,params, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }


  class ErrorMysqlFactory {
    constructor() {

    }

    async ReadAllErrors(){
        let sql = 'SELECT * FROM errors';
        try{
          const result = await query(sql);
          return result

        }catch(e){
          console.log(e)
        }
    }

    async CreateError(project,title,code,status,description){

      const sql = 'INSERT INTO errors (project, title, code, status, description) VALUES (?, ?, ?, ?, ?)';
      try{
        const result = await query(sql,[project,title,code,status,description]);
        return result

      } catch(e){
        console.log(e)
      }
    }

    async ReadAllProjects(){
      let sql = 'SELECT * FROM projects';
      try{
        const result = await query(sql);
        return result
      } catch(e) {
        console.log(e)
      }
    }

    async ReadOneProject(id){
      let sql = 'SELECT * FROM projects WHERE id = ?';
      try{
        const result = await query(sql,[id]);
        return result
      } catch(e){
        console.log(e)
      }
    }

    async CreateProject(title){
      const sql = 'INSERT INTO projects title VALUES ?';
      try{
        const result = await query(sql, [title])
      } catch(e) {
        console.log(e)
      }
    }

    async CreateProject(title){
      const sql = 'INSERT INTO projects ( title ) VALUES (?)';
      try{
        const result = await query(sql,[title]);
        return result

      } catch(e){
        console.log(e)
      }
    }

  }


export default new ErrorMysqlFactory();