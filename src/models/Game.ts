export default class Game {
  id: number;
  title: string;
  hourPlay?: number | null;
  isFavor: boolean;
  note?: string | null;
  finish: boolean;
  type: string;
  console: string;
  platformBuy: string;
  year: number;

  constructor(
    id: number,
    title: string,
    hourPlay: number,
    isFavor: boolean,
    note: string,
    finish: boolean,
    type: string,
    console: string,
    platformBuy: string,
    year: number
  ) {
    this.id = id;
    this.title = title;
    this.hourPlay = hourPlay;
    this.isFavor = isFavor;
    this.note = note;
    this.finish = finish;
    this.type = type;
    this.console = console;
    this.year = year;
    this.platformBuy = platformBuy;
  }
}
