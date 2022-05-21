const fs = require('fs');
const read = require('readline');


fs.unlink('file.txt',(err)=>{
    
    console.log('arquivo foi unlink (apagado)');
})