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


  class ErrorMysqlFactory {
    constructor() {

    }

    async ReadAllErrors(firstNum,secondNum){
        let sql = 'SELECT * FROM errors LIMIT ?,?';
        try{
          const result = await query(sql,[parseInt(firstNum),parseInt(secondNum)]);
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

    async ReadOneProject(id){
      let sql = 'SELECT * FROM projects WHERE id = ?';
      try{
        const result = await query(sql,[id]);
        return result
      } catch(e){
        console.log(e)
      }
    }

    async getTotal(id){
      let sql = "SELECT COUNT(*) FROM `errors` WHERE `project` = ? "
      try{
        const result = await query(sql,[id]);
        return result
      } catch(e){
        console.log(e)
      }
    }

    async GetErrorsPerProject(title, firstNum, secondNum, searchFilter, dateFrom, dateTo ){
      let filterDate =  dateFrom && dateTo ? `AND date BETWEEN '${dateFrom}' AND '${dateTo}'` : `AND 1=1`
      let filter = searchFilter ? `AND title LIKE '%${searchFilter}%'` : `AND 1=1`
      let sqlTotal = `SELECT COUNT(*) FROM errors WHERE project = ? ${filterDate} ${filter}`;
      let sql = `SELECT * FROM errors WHERE project = ? ${filterDate} ${filter} LIMIT ? OFFSET ?`;
      try{
        let resultTotal = await query(sqlTotal,[title, parseInt(firstNum), parseInt(secondNum)]);
        let result = await query(sql,[title, parseInt(firstNum), parseInt(secondNum)]);
        return {result:result, total:resultTotal }
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

    async ReadCriticals(firstNum, secondNum, searchFilter, dateFrom, dateTo ){
      let filterDate =  dateFrom && dateTo ? `AND date BETWEEN '${dateFrom}' AND '${dateTo}'` : `AND 1=1`
      let filter = searchFilter ? `AND title LIKE '%${searchFilter}%'` : `AND 1=1`
      let sqlTotal = `SELECT COUNT(*) FROM errors WHERE status = 'critical' ${filterDate} ${filter}`;

      let sql = "SELECT * FROM `errors` WHERE `status` = 'critical' LIMIT ? OFFSET ?";
      try{
        let resultTotal = await query(sqlTotal,[parseInt(firstNum), parseInt(secondNum)]);
        const result = await query(sql,[parseInt(firstNum), parseInt(secondNum)]);
        return {result:result, total:resultTotal }
      }catch(e){
        console.log(e)
      }
    }
    
    async ReadLast24(firstNum, secondNum, searchFilter, dateFrom, dateTo){
      let filterDate =  dateFrom && dateTo ? `AND date BETWEEN '${dateFrom}' AND '${dateTo}'` : `AND 1=1`
      let filter = searchFilter ? `AND title LIKE '%${searchFilter}%'` : `AND 1=1`
      let sqlTotal = `SELECT COUNT(*) FROM errors WHERE date >= NOW() - INTERVAL 1 DAY ${filterDate} ${filter}`;

      let sql = "SELECT * FROM `errors` WHERE date >= NOW() - INTERVAL 1 DAY";
      try{

        let resultTotal = await query(sqlTotal,[parseInt(firstNum), parseInt(secondNum)]);
        const result = await query(sql,[parseInt(firstNum), parseInt(secondNum)]);
        console.log('12',result)
        return {result:result, total:resultTotal }
      }catch(e){
        console.log(e)
      }
    }

    async CriticalYear(){
      try{
        let data = []
        for(let i = 1; i < 13 ; i++){
          let sql = `SELECT COUNT(*) FROM errors WHERE MONTH(date)=${i}`
          let result = await query(sql);
          let obj = {
            monthNumber:i,
            monthName: moment(i, 'MM').format('MMMM'),
            total:Object.values(result[0])[0]
          }
          data.push(obj)
        }
        return data
      }catch(e){
        console.log(e)
      }
    }

    async charId(nameProject){
      try{
        let data = []
        for(let i = 1; i < 13 ; i++){
          let sql = `SELECT COUNT(*) FROM errors WHERE project = ? AND MONTH(date)=${i}`
          let result = await query(sql,[Object.values(nameProject[0])[1]]);
          let obj = {
            monthNumber:i,
            monthName: moment(i, 'MM').format('MMMM'),
            total:Object.values(result[0])[0]
          }
          data.push(obj)
        }
        return data
      }catch(e){
        console.log(e)
      }

    }

    async ReadLast10Criticals(){
      let sql = "SELECT * from `errors` where status = 'critical' ORDER BY Id DESC LIMIT 10";
      try{
        const result = await query(sql);
        return {result:result}
      }catch(e){
        console.log(e)
      }
  }



  }


export default new ErrorMysqlFactory();