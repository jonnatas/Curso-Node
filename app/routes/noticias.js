
module.exports = function(application){

	application.get('/noticias', function(request, response){
		
		var connection = application.config.dbConnection();
		var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

		NoticiasDAO.getNoticias(function(error, result){
			response.render("noticias/noticias",{noticias : result});
		});

	});

};

