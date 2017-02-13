module.exports = function(application){
	
	application.get('/form_add_noticia', function(req, res){
		res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
			
		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obtigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','Autor é obtigatório').notEmpty();
		req.assert('data_noticia','Data é obtigatório').notEmpty().isDate({format : 'YYYY-MM-DD'});
		req.assert('noticia','Noticia é obtigatório').notEmpty;

		var erros = req.validationErrors();

		if (erros) {
			res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
			return;
		}

		var connection = application.config.dbConnection();
		var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

		NoticiasDAO.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
		
	});
}
