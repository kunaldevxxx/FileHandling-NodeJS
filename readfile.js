const fs = require('fs')
console.log(fs.readFileSync('./test.txt','utf-8')) //reading file synchron




//not sync
fs.readFile('./test.txt','utf8',(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})
//sync return but async dont 