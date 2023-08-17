let net = require("net")

sockets = []

var server = net.createServer();    
server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sockets.forEach(socket =>{
            const buf = Buffer.from("Teste");
            socket.write("teste")
        })
    });

    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

    sock.on("error", (data)=>{
        console.log("Erro: ", data)
    })
});

server.listen(8889, function() {    
  console.log('server listening to %j', server.address());  
});