var server = require('./server');
var route = require('./router');
var handleMap = require('./handles/handleMap');
server.start(route.route,handleMap.handleMap);