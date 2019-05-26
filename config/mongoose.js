var mongoose = require('mongoose');

module.exports = function(uri) {
	
	mongoose.connect(uri, { useMongoClient: true });

	mongoose.connection.on('connected', function() {
	  console.log('Mongoose! Connected in ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
	  console.log('Mongoose! Disconnected in ' + uri);
	});

	mongoose.connection.on('error', function(err) {
	  console.log('Mongoose! Conection Error: ' + err);
	});

	process.on('SIGINT', function() {
	  mongoose.connection.close(function() {
      console.log('Mongoose! Desconectado pelo término da aplicação');
      process.exit(0);
    });
  });
}