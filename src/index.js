var express = require('express');
var app = express();
var routes = require('./routes/index');
// var {info, error} = require('./modules/my-log');

routes(app);

app.listen(4000, function(){
    console.log('running on 4000');
});
