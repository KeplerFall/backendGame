import * as net from "net";

const sockets = new Array<net.Socket>;
const server = net.createServer();

server.on("connection", (socket)=>{
    console.log(`Connected: ${socket.remoteAddress}:${socket.remotePort}`);
    sockets.push(socket)

    socket.on("data", (data)=>{
        console.log(`Data: ${socket.remoteAddress}: ${data}`);
        //Tratamento da data
    })

    socket.on("close", (data)=>{
        let index = sockets.findIndex((o)=>{
            return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort
        })
        index !== -1 ? sockets.splice(index, 1) : null
        console.log(`Closed: ${socket.remoteAddress}:${socket.remotePort}`)
    })

    socket.on("error", (err)=>{
        console.log(`ERROR: ${err}`)
    })
})

server.listen(8889, ()=>{
    console.log(`Server listening on port ${8889}`)
})