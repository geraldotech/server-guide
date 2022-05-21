//criando array a partir de txt file
const fs = require('fs');
const read = require('readline');


fs.readFile('array.txt',function(err,data){

let str = data.toString();

let newStr = str.split('/');

console.log(newStr);

})