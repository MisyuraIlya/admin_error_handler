import db from "../db/config.js";

function query(sql) {
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
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

    async ReadErrors(){
        let sql = 'SELECT * FROM errors';
        try{
          const result = await query(sql);
          return result

        }catch(e){
          console.log(e)
        }
    }
}




export default new ErrorMysqlFactory();