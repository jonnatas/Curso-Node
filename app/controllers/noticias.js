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

	var id_noticia = request.query;

	noticiaModel.getNoticia(id_noticia, function(error, result){
		response.render("noticias/noticia",{noticia : result})
	});
}