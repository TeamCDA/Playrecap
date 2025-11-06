import AddGameDialog from "@/components/AddGameDialog";
import CardGame from "@/components/CardGame";
import FiltersGames from "@/components/home/FiltersGames";
import CustomNavbar from "@/components/layout/CustomNavbar";
import { GamesMockList } from "@/helpers/GamesMockList";
import type Game from "@/models/Game";
import { useState } from "react";

const HomePage = () => {
  const list = GamesMockList;

  //   const date = new Date();
  //   const year = date.getFullYear();

  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedYear, setSelectedYear] = useState<string>(year.toString());
  // const [selectedConsole, setSelectedConsole] = useState<string>("all");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="contenu">
        <div className="mt-5">
          <FiltersGames games={list.length} />
        </div>

        <AddGameDialog
          game={selectedGame}
          open={isDialogOpen}
          onOpenChange={handleDialogClose}
          isEditMode={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((game) => (
            <CardGame
              key={game.id}
              game={game}
              onClick={() => handleGameClick(game)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <AddGameDialog isEditMode={false} />
      </div>
    </div>
  );
};

export default HomePage;
