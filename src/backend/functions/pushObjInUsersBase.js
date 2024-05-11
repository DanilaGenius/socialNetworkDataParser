const fs = require('node:fs');

function pushObjInUsersBase(obj, userBase) {
    let usersBase = userBase 
    let usersBaseToArr = usersBase;

    if  ( !Array.isArray(usersBaseToArr) ) {
        usersBaseToArr = [{id:0}]
    } 

    const lastElemid = usersBaseToArr[usersBaseToArr.length-1].id || 0;
    const nextElenId = lastElemid + 1;
    
    const resultObj = {
        id: nextElenId,
        ...obj
    }
    usersBaseToArr.push(resultObj);
    
    let usersBaseToJSON = JSON.stringify(usersBaseToArr);

    fs.writeFileSync(`${__dirname}/../../../src/dataBases/userBase.json`, usersBaseToJSON, (err, data) => {
        console.log("Записан", `${__dirname}/../../../src/dataBases/userBase.json`)
    });    

}

module.exports = pushObjInUsersBase