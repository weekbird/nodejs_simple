function showErr(response,msg){
	response.writeHead(200,{"Content-Type":"text/plain;charset='utf-8'"});
	response.write(msg);
	response.end();
}
exports.showErr = showErr;