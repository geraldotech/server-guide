const fs = require('fs'); //new permite manipular 


fs.appendFile('file2.txt','\n novo access from url',(err)=>{
    if(err) throw err;
    console.log('salvo novamente com sucesso! ');
})