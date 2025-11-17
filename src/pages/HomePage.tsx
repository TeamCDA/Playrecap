import AddGameDialog from "@/components/dialogs/AddGameDialog";
import CardGame from "@/components/cards/CardGame";
import FiltersGames from "@/components/home/FiltersGames";
import type Game from "@/models/Game";
import { useState } from "react";
import EmptyGamesList from "@/components/home/EmptyGamesList";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useGame } from "@/hooks/useGame";
import GamesGrid from "@/components/game/GamesGrid";

const HomePage = () => {
  const { user, logout } = useAuth();
  const { games, loading } = useGame();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="contenu">
      <div className="flex justify-center items-center gap-4">
        <p className="text-center my-5">USER : {user?.email}</p>
        <Button variant={"destructive"} onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="mt-5">
        <FiltersGames games={games ? games.length : 0} />
      </div>

      <AddGameDialog
        game={selectedGame}
        open={isDialogOpen}
        onOpenChange={handleDialogClose}
        isEditMode={true}
      />

      <GamesGrid onClick={handleGameClick} />

      {/* {loading ? (
  <p>Chargement...</p>
) : games.length > 0 ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {games.map((game) => (
      <CardGame
        key={game.id}
        game={game}
        onClick={() => handleGameClick(game)}
      />
    ))}
  </div>
) : (
  <EmptyGamesList />
)} */}

      <div className="flex justify-center mt-10">
        <AddGameDialog isEditMode={false} />
      </div>
    </div>
  );
};

export default HomePage;
