import ExecuteFactory from "../classes/execute-factory.js";
import ErrorMysqlFactory from '../classes/factory.js'

function splitStringBySegmentLength(source, segmentLength) {
    if (!segmentLength || segmentLength < 1) throw Error('Segment length must be defined and greater than/equal to 1');
    const target = [];
    for (
        const array = Array.from(source);
        array.length;
        target.push(array.splice(0,segmentLength).join('')));
    return target;
}

class ExecuteService {


    
    async ReadTest(){
        const result = await ExecuteFactory.ReadTest();
        const data = splitStringBySegmentLength(result.response, 100000);
        const total = data.length
        // .match(/.{1,10000}/g)
        // 'abcdefghijklmnopqrstuvwxyz'.match(/.{1,6}/g);
        return { response:data, total:total };
    }

    async ReadCronList(id,TotalRows,PageIndex, searchFilter, dateFrom, dateTo,firstNum,secondNum){
        
        const name = await ErrorMysqlFactory.ReadOneProject(id);
        const result = await ExecuteFactory.ReadCronList(name[0].title,TotalRows,PageIndex, searchFilter, dateFrom, dateTo,firstNum,secondNum);

        return { response: result.result, total:result.total }
    }

    async ReadLast10Crons(){
        const result = await ExecuteFactory.ReadLast10Crons();
        return { response:result};
    }
}

export default new ExecuteService();