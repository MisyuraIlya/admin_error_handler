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

    async CreateError(project,title,code,status,description,response, body = null , language){

      const sql = 'INSERT INTO errors (project, title, code, status, description, response, body, language) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      try{
        const result = await query(sql,[project,title,code,status,description, response, body, language]);
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

    async GetErrorsPerProject(title){
      let sql = 'SELECT * FROM errors WHERE project = ?';
      try{
        const result = await query(sql,[title]);
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

    async ReadCriticals(){
      let sql = "SELECT * FROM `errors` WHERE `status` = 'critical'";
      try{
        const result = await query(sql);
        return result

      }catch(e){
        console.log(e)
      }
    }
    
    async ReadLast24(){
      let sql = "SELECT * FROM `errors` WHERE date >= NOW() - INTERVAL 1 DAY";
      try{
        const result = await query(sql);
        return result

      }catch(e){
        console.log(e)
      }
    }

  }


export default new ErrorMysqlFactory();