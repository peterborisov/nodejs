const HTTP = require('http');
const controller = require('./controllers');

HTTP.createServer((req, res)=>{
   for(let handler of controller){
       if (!handler(req, res)){
           break
       }
   }
}).listen(3010)

