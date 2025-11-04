import Console from "./Console";

export default class Game{

    
     id : number;
    name : string;
    hourPlay : number;
    isFavor: boolean;
    star : number;
    note: string;
    isFinish : Date;
    type: string;
    console:Console;

constructor(

    id : number,
    name: string,
     hourPlay : number,
    isFavor: boolean,
    star : number,
    note: string,
    isFinish : Date,
    type: string,
    console:Console
){
    this.id = id;
    this.name = name;
    this.hourPlay = hourPlay;
    this.isFavor = isFavor;
    this.star = star;
    this.note = note;
    this.isFinish = isFinish;
    this.type = type;
    this.console = console;
}

}