var handleUser1 = require('./handleUser1.js');
var handleUser2 = require('./handleUser2.js');
var handleMap = {};
//handleUser1,handleUser2模拟多个人开发时的情况
/*------------------handleUser1-----start--------*/
handleMap['/'] = handleUser1.login;
handleMap['/login'] = handleUser1.login;
handleMap['/queryuser'] = handleUser1.queryuser;
/*------------------handleUser1-----end--------*/

/*------------------handleUser2-----start--------*/
handleMap['/fuck'] = handleUser2.fuck;
handleMap['/upload'] = handleUser2.upload;
/*------------------handleUser2-----end--------*/

exports.handleMap = handleMap;
