//var mustache = require('../js/mustache.js');可以加入mustache模块
function fuck(request,response){
	//console.log("新增的模块的处理程序");
	response.writeHead(200,{"Content-Type":"text/html;charset=utf-8","Access-Control-Allow-Origin":"*"});
	/*上面加上Access-Control-Allow-Origin选项，自己测试时才允许不同源的ajax访问*/
	/*var json = {"users":[{"name":"chla","age":14},{"name":"rx","age":24},{"name":"liuly","age":23},{"name":"liu蓓","age":34}]};
	var template = '{{#users}}name is {{name}} and age is {{age}}<br>{{/users}}';
	var output = mustache.render(template,json);*/
	//console.log(output+'------');
	var output = '{"users":[{"name":"chla","age":14},{"name":"rx","age":24},{"name":"liuly","age":23},{"name":"liu蓓","age":34}]}';
	response.write(output);
	response.end();
}

function upload(request,response){
	console.log("该方法与另外一个模块的方法同名，但是不影响程序判断");
	response.end();
}

exports.fuck = fuck;
exports.upload = upload;