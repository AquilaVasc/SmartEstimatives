const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.set('views', './app/views');
    app.set('view engine', 'jade');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static('./app/resources'));

    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}