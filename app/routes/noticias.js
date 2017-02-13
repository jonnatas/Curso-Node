
module.exports = function(application){

	application.get('/noticias', function(request, response){
		
		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			response.render("noticias/noticias",{noticias : result});
		});

	});

};

