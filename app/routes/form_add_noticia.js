module.exports = function(app){
	
	app.get('/form_add_noticia', function(request, response){
		response.render("admin/form_add_noticia")
	});

}
