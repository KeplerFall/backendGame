import { Socket } from "net";

export default class PlayerInfo{
    socket: Socket;
    ip: string;
    port: string;

    constructor(socket: Socket, ip: string, port: string){
        this.socket = socket;
        this.ip = ip;
        this.port = port;
    }
}