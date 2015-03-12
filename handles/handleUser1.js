function login(request,response){
	console.log('login method');
	var body = '<html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"></head><body><form action="/upload" method="post"><textarea name="text" cols="60" rows="20"></textarea><input type="submit" value="Submit text"></form></body></html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

function queryuser(request,response){
	console.log('queryuser method');
	response.end();
}

exports.login = login;
exports.queryuser = queryuser;