import { useGame } from "@/hooks/useGame";
import EmptyGamesList from "../home/EmptyGamesList";
import CardGame from "../cards/CardGame";
import type Game from "@/models/Game";
import { useTranslation } from "react-i18next";

type Props = {
    onClick: (game: Game) => void;
}
const GamesGrid = ({ onClick } : Props) => {
  const { games, loading } = useGame();
  const { t } = useTranslation();

  if (loading || games === null) {
    return <p>{t("LOADING")}...</p>;
  }

  if (games.length === 0) {
    return <EmptyGamesList />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <CardGame
          key={game.id}
          game={game}
          onClick={() => onClick(game)}
        />
      ))}
    </div>
  );
};

export default GamesGrid;
