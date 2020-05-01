const express = require('express');
const app = express();

// var http =require ('http');
// var url = require('url');
// var querystring = require('querystring');
var {info, error} = require('./modules/my-log');
var {countries} = require('countries-list');

app.get('/', function(request, response){
    response.status(200).send('HELLO');
});

app.get('/info', function(request, response){
    response.send('info nodemon');
});

app.get('/country',(request, response) => {
    console.log('request.query :',request.query);
    response.json(countries[request.query.code]);
});

app.get('*', function(request, response){
    response.status(404).send('NOT FOUND');
});

// var server =  http.createServer((function(request, response){

//     var parsed = url.parse(request.url);
//     console.log('parsed :',parsed);

//     var pathname = parsed.pathname;
//     var query = querystring.parse(parsed.query);
//     console.log('Query :',query);

    
//     if(pathname==='/'){
//         response.writeHead(200,{'Content-Type':'text/html'});  // Confirmación de conexión.
//         response.write('<html><body><p>HOME PAGE</p></body></html>');
//         response.end();
//     }
//     else if(pathname==='/exit'){
//         response.writeHead(200,{'Content-Type':'text/html'});  
//         response.write('<html><body><p>BYE</p></body></html>');
//         response.end();
//     }
//     else if(pathname==='/country'){
//         response.writeHead(200,{'Content-Type':'application/json'});  
//         response.write(JSON.stringify(countries[query.code]));
//         response.end();
//     }
//     else if(pathname==='/info'){
//         var result = info(pathname);
//         response.writeHead(200,{'Content-Type':'text/html'});  
//         response.write(result);
//         response.end();
//     }else if(pathname==='/error'){
//         var result = error(pathname);
//         response.writeHead(200,{'Content-Type':'text/html'});  
//         response.write(result);
//         response.end();
//     }
//     else{
//         response.writeHead(404,{'Content-Type':'text/html'});
//         response.write('<html><body><p>NOT FOUND</p></body></html>');
//         response.end();
//     }

    
// }));

app.listen(4000,function(){
    console.log('running on 4000');
    
});

// server.listen(4000);
// console.log('running on 4000');