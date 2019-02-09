const HTTP = require('http');
const controllers = require('./controllers');

HTTP.createServer((req, res)=>{
   for(let controller of controllers){
       if (!controller(req, res)){
           break
       }
   }
}).listen(3010)