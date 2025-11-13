import AddGameDialog from "@/components/dialogs/AddGameDialog";
import CardGame from "@/components/cards/CardGame";
import FiltersGames from "@/components/home/FiltersGames";
import { GamesMockList } from "@/helpers/GamesMockList";
import type Game from "@/models/Game";
import { useState } from "react";
import EmptyGamesList from "@/components/home/EmptyGamesList";

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

      <div className="flex justify-center mt-10">
        <AddGameDialog isEditMode={false} />
      </div>

      <EmptyGamesList />
    </div>
  );
};

export default HomePage;
