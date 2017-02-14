module.exports.index = function (application, request, response) {
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(erro, result){
		console.log(result);
		response.render("home/index")
	});
	
}