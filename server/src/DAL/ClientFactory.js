import db from "../db/config.js";
import moment from 'moment-timezone';

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


  class ClientMysqlFactory {

    async ReadAllProjects(firstNum, secondNum, searchFilter){
        let filter = searchFilter ? `WHERE title LIKE '%${searchFilter}%'` : `WHERE 1=1 `
        let sql = `SELECT * FROM projects  ${filter} LIMIT ? OFFSET ?`;
        let sqlTotal = `SELECT COUNT(*) FROM projects ${filter}`;
      try{
        const resultTotal = await query(sqlTotal);
        const result = await query(sql,[ parseInt(firstNum), parseInt(secondNum)]);
        return {result:result, total:resultTotal }
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

    async FindOneProject(title){
      const sql = 'SELECT `title` FROM `projects` WHERE `title` = ?'
      try {
        const result = await query(sql,[title]);
        return result
      } catch(e){
        console.log(e)
      }
    }

  }


export default new ClientMysqlFactory();