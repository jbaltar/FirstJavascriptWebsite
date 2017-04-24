/*console.log('hello from our node script!');*/
var express = require('express');
var app = express();

var http = require('http'); 
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server); 

io.on('connection', function(socket) {
    socket.on('message', function (msg) {
        io.emit('message', msg);
    });
});

server.listen(8080, function () { /* listening to 8080 port (hidden part in http://google.com */ 
    
    console.log('Chat server running'); 
});

/* 
npm install express - used to write wweb servers in Node
npm install socket.io - Browsers have web sockets.  Socket allows us to write JS code on botht the client (browser) side and the server (node) side. 
*/
