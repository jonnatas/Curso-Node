var http = require('http');

var server = http.createServer( function(request, response){
	var categoria = request.url;

	if (categoria == '/tecnologia') {
		response.end("<html><body> tecnologia!!!!!</body></html>");
	} else if (categoria == '/moda') {
		response.end("<html><body> moda!!!!!</body></html>");
	} else if (categoria == '/beleza') {
		response.end("<html><body> beleza!!!!!</body></html>");
	} else if (categoria == '/') {
		response.end("<html><body> Portal de notícias!!!!!</body></html>");
	} else {
			response.end("<html><body>Erro 404!!!!!</body></html>");	
	}




});

server.listen(3000);