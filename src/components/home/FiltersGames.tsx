import { useState } from "react";
import CustomSearchInput from "../CustomSearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { consoleList } from "@/helpers/ConsoleList";
import TitleGamesList from "./TitleGamesList";

type filterProps = {
  games: number;
};

const FiltersGames = ({ games }: filterProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>(year.toString());
  const [selectedConsole, setSelectedConsole] = useState<string>("all");
  // const [years, setYears] = useState<number[]>([2025, 2026, 2027, 2028]);
  const years = [2025, 2026, 2027, 2028];

  const handleReset = () => {
    setSearchTerm("");
    setSelectedYear(year.toString());
    setSelectedConsole("all");
  };

  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"> */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
        <CustomSearchInput setSearch={setSearchTerm} />

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="bg-card border-border text-foreground w-60 max-xl:w-30">
            <SelectValue placeholder="Toutes les années" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {/* <SelectItem value="all" className="text-foreground hover:bg-accent">
              Toutes les années
            </SelectItem> */}
            {years.map((year) => (
              <SelectItem
                key={year}
                value={year.toString()}
                className="text-foreground hover:bg-accent"
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedConsole} onValueChange={setSelectedConsole}>
          <SelectTrigger className="bg-card border-border text-foreground w-60 max-xl:w-44">
            <SelectValue placeholder="Toutes les consoles" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem
              value="all"
              className="text-foreground hover:bg-accent mb-2"
            >
              Toutes les consoles
            </SelectItem>
            {consoleList.map((console) => (
              <SelectItem
                key={console}
                value={console}
                className="text-foreground hover:bg-accent"
              >
                {console}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant={"secondary"} onClick={handleReset}>
          Reset
        </Button>
      </div>

      <p>
        {searchTerm ? searchTerm : "all"} {selectedYear} {selectedConsole}
      </p>

      <TitleGamesList
        selectedYear={selectedYear}
        selectedConsole={selectedConsole}
        games={games}
      />
    </div>
  );
};

export default FiltersGames;
