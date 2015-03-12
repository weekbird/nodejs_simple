var http = require('http');
function start(route,handleMap){
	http.createServer(function(request,response){
		route(request,response,handleMap);
	}).listen(8888);
	console.log('server started..');
}

exports.start = start;