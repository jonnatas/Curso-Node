module.exports.noticias = function (application, request, response) {
	var connection = application.config.dbConnection();
	var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

	NoticiasDAO.getNoticias(function(error, result){
		response.render("noticias/noticias",{noticias : result});
	});
}

module.exports.noticia = function (application, request, response) {
	var connection = application.config.dbConnection();
	var noticiaModel = new application.app.models.NoticiasDAO(connection);

	noticiaModel.getNoticia(function(error, result){
		response.render("noticias/noticia",{noticia : result})
	});
}