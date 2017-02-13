
module.exports = function(application){

	application.get('/noticia', function(request, response){
		
		var connection = application.config.dbConnection();
		var noticiaModel = new application.app.models.NoticiasDAO(connection);

		noticiaModel.getNoticia(function(error, result){
			response.render("noticias/noticia",{noticia : result})
		});
		
	});

};

