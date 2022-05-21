const fs = require('fs');
const read = require('readline');


fs.rename('file.txt','filezzz.txt',(err)=>{
    
    console.log('arquivo foi renomeado');
})