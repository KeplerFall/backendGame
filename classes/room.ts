import PlayerInfo from "./PlayerInfo";

export default class Room{
    id: number;
    maxPlayers: number;
    playerList: PlayerInfo[];

    constructor(id:number, maxPlayers: number){
        this.id = id;
        this.maxPlayers = maxPlayers;
        this.playerList = new Array<PlayerInfo>
    }
}