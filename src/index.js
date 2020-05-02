var express = require('express');
var app = express();

// var routes = require('./routes/index');
const routesv1 = require('./routes/v1');

// routes(app);
routesv1(app);

app.listen(4000, function(){
    console.log('running on 4000');
});
