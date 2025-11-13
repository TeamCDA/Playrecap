export default class Game {
  id: number;
  title: string;
  hourPlay?: number | null;
  isFavor: boolean;
  note?: string | null;
  isFinish: boolean;
  type: string;
  console: string;
  platformPlay: string;
  year: number;

  constructor(
    id: number,
    title: string,
    hourPlay: number,
    isFavor: boolean,
    note: string,
    isFinish: boolean,
    type: string,
    console: string,
    platformPlay: string,
    year: number
  ) {
    this.id = id;
    this.title = title;
    this.hourPlay = hourPlay;
    this.isFavor = isFavor;
    this.note = note;
    this.isFinish = isFinish;
    this.type = type;
    this.console = console;
    this.year = year;
    this.platformPlay = platformPlay;
  }
}
