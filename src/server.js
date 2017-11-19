var http = require('http');
var fs = require('fs');
var path = require('path');


function handler(request, response) {
	var endpoint = request.url;
	var filePath = path.join(__dirname + '/..' + '/public/index.html');

	 if(endpoint==='/'){
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
}


var server = http.createServer(handler);


server.listen(3000, function () {
	console.log("Server listening at port 3000, ready to accept requests");
}
	)



