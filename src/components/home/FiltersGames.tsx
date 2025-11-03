import { useState } from "react";
import CustomSearchInput from "../CustomSearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FiltersGames = () => {
    const date = new Date();
    const year = date.getFullYear();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>(year.toString());
  const [selectedConsole, setSelectedConsole] = useState<string>("all");
  const [years, setYears] = useState<number[]>([
    2025, 2026, 2027, 2028
  ]);


  const consoles = [
    "Mobile",
    "Nintendo Switch",
    "Nintendo Switch 2",
    "PC",
    "Playstation 3",
    "Playstation 4",
    "Playstation 5",
    "Xbox 360",
    "Xbox One",
    "Xbox Series X",
    "Xbox Series S",
    "Autre"
  ];

  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"> */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
        <CustomSearchInput setSearch={setSearchTerm} />

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="bg-card border-border text-foreground w-60 max-xl:w-44">
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
            <SelectItem value="all" className="text-foreground hover:bg-accent mb-2">
              Toutes les consoles
            </SelectItem>
            {consoles.map((console) => (
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
      </div>

      <div>
        <p>
          {searchTerm ? searchTerm : "all"} {selectedYear} {selectedConsole}
        </p>
      </div>
    </div>
  );
};

export default FiltersGames;
