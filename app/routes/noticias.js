var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	var connection = dbConnection();
	
	app.get('/noticias', function(request, response){

		connection.query('select * from noticias', function(error, result){
			response.render("noticias/noticias",{noticias : result});
		});

	});

};

