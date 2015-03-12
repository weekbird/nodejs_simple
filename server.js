var http = require('http');
function start(){
	http.createServer(function(request,response){
		console.log('do something');
	}).listen(8888);
	console.log('server started..');
}

exports.start = start;