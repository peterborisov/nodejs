const http = require('http');
const controllers = require('./controllers');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

http.createServer((req, res)=>{
   for(let controller of controllers){
       if (!controller(req, res)){
           break
       }
   }
}).listen(3010)