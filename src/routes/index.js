var {countries, languages} = require('countries-list');

const routes = (app) => {

    app.get('/', function(request, response){
        response.status(200).send('HELLO');
    });
    
    app.get('/info', function(request, response){
        response.send('info nodemon');
    });
    
    app.get('/country', function(request, response){
        console.log('request.query :',request.query);
        response.json(countries[request.query.code]);
    });
    
    app.get('/languages/:lang', function(request, response){
        console.log('request.params :',request.params);
        var lang =  languages[request.params.lang];
        if (lang){
            response.json({status: 'OK', data: lang});
        } else {
            response.status(404).json({ status: 'NOT FOUND',
            message: 'language '+ request.params.lang + ' not found'});
        }
        
    });
    
    app.get('*', function(request, response){
        response.status(404).send('NOT FOUND');
    });
    
};

module.exports = routes;
