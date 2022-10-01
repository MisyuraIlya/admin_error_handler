import * as fs from 'fs';
import * as path from 'path';

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


  class ExecuteFactory {
    constructor() {}

    async ReadTest(){
        
        try{
          const data = 'http://localhost/admin_error_cron/cronsData/elpaz-funcNameElpaz-12:00:00-14.09.2022.txt'
          return {response: data};

        }catch(e){
          console.log(e)
        }
    }

    async ReadCronList(projectName,TotalRows,PageIndex, searchFilter, dateFrom, dateTo,firstNum,secondNum){
      let files = fs.readdirSync(path.resolve() + "/cronsData");
      let nameProject = projectName;
      let docs = [];

      files.map((doc,index) => {
        let fileName = doc.split('-')
        if(fileName[0] == nameProject){
          let obj = {
            id:index,
            name:fileName[1],
            time:fileName[2],
            date:fileName[3],
            link:`http://localhost/admin_error_cron/cronsData/${doc}`
          }
          docs.push(obj)
        }
      })
      // console.log('here',firstNum,secondNum)
      const totalDocs = docs.length
      const slicedData = docs.slice(firstNum,secondNum)
      return {result:slicedData , total:totalDocs }
      
      
    }

    async ReadLast10Crons(){
      let files = fs.readdirSync(path.resolve() + "/cronsData");
      let docs = [];

      files.map((doc,index) => {
        if(index <= 10){
          let fileName = doc.split('-')
          let obj = {
            id:index,
            name:fileName[1],
            time:fileName[2],
            date:fileName[3],
            link:`http://localhost/admin_error_cron/cronsData/${doc}`
          }
          docs.push(obj)
        }
      })
      // console.log('here',firstNum,secondNum)
      const totalDocs = docs.length
      return {result:docs , total:totalDocs }
    }
   
  }


export default new ExecuteFactory();