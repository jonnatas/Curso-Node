
module.exports = function(application){

	application.get('/noticia', function(request, response){
		
		var connection = application.config.dbConnection();
		var noticiaModel = application.app.models.noticiasModel;

		noticiaModel.getNoticia(connection, function(error, result){
			response.render("noticias/noticia",{noticia : result})
		});
		
	});

};

