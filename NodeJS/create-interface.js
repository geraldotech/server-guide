const { resolveNaptr } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome? ", function(name){
    console.log(`O nome do usuario é ${name}`);
    rl.question("Qual a sua idade ",function(idade){
        console.log(`A idade do ${name} é ${idade}`);
    })
})

rl.on('close',function(){
    console.log("Good bye");
    process.exit(0);
})