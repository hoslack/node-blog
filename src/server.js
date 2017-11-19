var http = require('http');
var fs = require('fs');
var path = require('path');



function handler(request, response) {
	var url = request.url;
	var filePath = path.join(__dirname + '/..' + '/public/index.html');

	 if(url==='/'){
			response.writeHead(200, {'ContentType':'text/html'});

			fs.readFile(filePath,function(error, file) {
				if(error){
					response.writeHead(500, {'ContentType':'text/html'});
					response.end("There was a problem with the server");
					console.log(filePath);
				} else{
					response.end(file);
				}

				});
	}
	else{

	var filePath = path.join(__dirname, '..', url);
		var extension = url.split('.')[1];
		var extensionType = {
			'html':'text/html',
			'css':'text/css',
			'js':'application/javascript',
			'ico':'image/x-icon'
		};
		extensionType = extensionType[extension];

		fs.readFile(filePath,function(error,file){
			if (error) {
				response.writeHead(500, {'Content-Type':'text/html'});
				response.end('<h1>404 NOT FOUND</h1>')
			} else {
				response.writeHead(200,{'Content-Type': extensionType});
				response.end(file);
				}
			});
		


	}
}


var server = http.createServer(handler);


server.listen(4000, function () {
	console.log("Server listening at port 3000, ready to accept requests");
}
	)



