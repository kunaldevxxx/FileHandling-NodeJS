const fs= require('fs');
fs.writeFileSync('./test.txt','Hey There Buddy')   // writing and creating file 
//writefilesync is sync .....
fs.writeFile('./async.txt','Hii',(err)=>{})
//writefile is async 