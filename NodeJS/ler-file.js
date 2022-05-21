
//leitura de arquivos
const fs = require('fs');


fs.readFile('array.txt',function(err,data){

    console.log((data.toString()));;
})