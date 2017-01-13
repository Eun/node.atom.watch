var http = require('http');
function handleRequest(request, response){
response.setHeader('Access-Control-Allow-Origin', '*');
response.setHeader('Content-Type', 'application/json');
response.end('{"TimeStamp": ' + new Date(Date.now()+(new Date().getTimezoneOffset()*60000)).getTime() + '}');
}
var server = http.createServer(handleRequest);
server.listen(process.env.PORT || 5000);
