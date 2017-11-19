var http = require('http');


var message = "I am happy to be coding along";

function handler(request, response) {
	response.writeHead(200, {'ContentType':'text/html'});
	response.write(message);
	response.end();
}


var server = http.createServer(handler);


server.listen(3000, function () {
	console.log("Server listening at port 3000, ready to accept requests");
}
	)



