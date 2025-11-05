export default class Game {
  id: number;
  title: string;
  hourPlay?: number | null;
  isFavor: boolean;
  rating?: number | null;
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
    rating: number,
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
    this.rating = rating;
    this.note = note;
    this.completionDate = completionDate;
    this.type = type;
    this.console = console;
    this.year = year;
    this.platformBuy = platformBuy;
  }
}
