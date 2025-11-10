export default class Game {
  id: number;
  title: string;
  hourPlay?: number | null;
  isFavor: boolean;
  note?: string | null;
  completionDate?: string;
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
    completionDate: string,
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
    this.completionDate = completionDate;
    this.type = type;
    this.console = console;
    this.year = year;
    this.platformBuy = platformBuy;
  }
}
