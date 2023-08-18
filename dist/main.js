"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const sockets = new Array;
const server = net.createServer();
server.on("connection", (socket) => {
    console.log(`Connected: ${socket.remoteAddress}:${socket.remotePort}`);
    sockets.push(socket);
    socket.on("data", (data) => {
        console.log(`Data: ${socket.remoteAddress}: ${data}`);
        //Tratamento da data
    });
    socket.on("close", (data) => {
        let index = sockets.findIndex((o) => {
            return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort;
        });
        index !== -1 ? sockets.splice(index, 1) : null;
        console.log(`Closed: ${socket.remoteAddress}:${socket.remotePort}`);
    });
    socket.on("error", (err) => {
        console.log(`ERROR: ${err}`);
    });
});
server.listen(8889, () => {
    console.log(`Server listening to ${server.address}`);
});
