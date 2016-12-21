var http = require('http');
function handleRequest(request, response){
response.setHeader('Access-Control-Allow-Origin', '*');
response.end('{"TimeStamp": ' + new Date(Date.now()+(new Date().getTimezoneOffset()*1000)).getTime() + '}');
}
var server = http.createServer(handleRequest);
server.listen(process.env.PORT || 5000);
