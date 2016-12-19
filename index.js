var http = require('http');
function handleRequest(request, response){
response.setHeader('Access-Control-Allow-Origin', '*');
response.end('{"TimeStamp": ' + Date.now() + '}');
}
var server = http.createServer(handleRequest);
server.listen(process.env.PORT || 5000);