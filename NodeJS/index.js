const http = require('http');
const fs = require('fs'); //new permite manipular arquivos usando node

const hostname = "127.0.0.1";
const port = 3000;

//criado novo arquivos
/* fs.writeFile('danki.txt','teste',function(err){
    if(err) throw err;
    console.log('arquivo criado com sucesso!');
}) */

//cria novo arquivo ou insere o conteudo do que ja existe
/* fs.appendFile('danki.txt','\n outro conteudo',(err)=>{
    if(err) throw err;
    console.log('salvo novamente com sucesso! ');
}) */


const server = http.createServer((req,res)=>{

    if(req.url == '/novo'){


    fs.readFile('index.html',function(err,data){

//cria novo arquivo ou insere o conteudo do que ja existe
        fs.appendFile('file.txt','\n novo access from url',(err)=>{
            if(err) throw err;
            console.log('salvo novamente com sucesso! ');
        })

        res.writeHead(200,{'Content-type':'text-html'});
        res.write(data);
        return res.end();
    }) 


}else {
    return res.end();
}


})

server.listen(port,hostname,()=>{
    console.log("server is running!");
})