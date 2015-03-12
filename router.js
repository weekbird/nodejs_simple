var errCatcher = require('./errCatcher');
function route(request,response,handleMap){
	if(typeof handleMap[request.url] === 'function'){
		handleMap[request.url](request,response);
	}else{
		errCatcher.showErr(response,'对不起，该url不存在');
		//这里或者可以自动跳转到登陆页面
	}
}
exports.route = route;