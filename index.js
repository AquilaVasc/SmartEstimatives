var app = require('./config/express')();

require('./config/mongoose')('mongodb://localhost/SmartEstimatives');

app.listen(app.get('port'));