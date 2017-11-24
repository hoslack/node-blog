var http = require('http');
var fs = require('fs');
var path = require('path');
var port = 3000;


function handler(request, response) {
	var url = request.url;



			function home() {
				response.writeHead(200, {'Content-Type':'text/html'});
				fs.readFile(__dirname + '/..' + '/public/index.html',function(error, file) {
					if(error){
						response.writeHead(500, {'Content-Type':'text/html'});
						response.write('There was an error on our side');
						return;
					}

					response.end(file);

				});
			}



			function publicurls() {
				var filePath = path.join(__dirname, '/..', '/public', url);
				var extension = url.split('.')[1];
				var extensionType = {
					'html':'text/html',
					'css':'text/css',
					'js':'application/javascript',
					'ico':'image/x-icon'
				};
				currentextensionType = extensionType[extension];

				fs.readFile(filePath,function(error, file) {

					if(error){
						response.writeHead(500, {'Content-Type':'text/html'});
						response.write('There was an error on our side');
						return;
					}
					response.writeHead(200, {'Content-Type':'text/html'});
					response.end(file);

				});
			}




			if(url.indexOf('/public/'!==-1)){
				publicurls();
				home();
				
					}
			else{
				console.log('check url');
			}

	
}




















var server = http.createServer(handler);

server.listen(port, function() {
	console.log('server running on port ' + port);
});