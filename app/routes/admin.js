module.exports = function(application){
	
	application.get('/form_add_noticia', function(req, res){
		res.render("admin/form_add_noticia")
	});

	application.post('/noticias/salvar', function(req, res){
		//res.send("Chegou napágina");
		var noticia = req.body;
/*		res.send(noticia);*/

		var connection = application.config.dbConnection();
		var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

		NoticiasDAO.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
		
	});
}
