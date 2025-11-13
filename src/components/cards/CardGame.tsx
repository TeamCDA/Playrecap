import Game from "@/models/Game";
import { Card } from "../ui/card";
import { CheckCircleIcon, NotebookText } from "lucide-react";
import ConsoleName from "../game/ConsoleName";

type GameProps = {
  game: Game;
  onClick: () => void;
};
const CardGame = ({ game, onClick }: GameProps) => {
  return (
    <Card
      onClick={onClick}
      className="hover:cursor-pointer group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      <div className="px-6 py-2">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 title={game.title} className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors capitalize truncate lg:w-[15rem] w-[90%]">
              {game.title}
              {/* {game.type === "dlc" && (
                <span className="text-xs text-muted-foreground"> (DLC)</span>
              )}
              {game.type === "+dlc" && <span className="text-xs"> (+DLC)</span>} */}
            </h3>
            <div className="flex items-center gap-2 flex-wrap -ml-1">
              <ConsoleName console={game.console} />
              {game.hourPlay && (
                <span className="text-sm text-muted-foreground">
                  {game.hourPlay}h
                </span>
              )}
              <span className="text-sm text-muted-foreground">{game.year}</span>
              {/* <span className="text-sm text-muted-foreground capitalize">
                {game.platformBuy}
              </span> */}
              {game.type === "dlc" && (
                <span className="text-xs text-muted-foreground"> (DLC)</span>
              )}
              {game.type === "+dlc" && <span className="text-xs"> (+DLC)</span>}
            </div>
          </div>
        </div>

        {/* {game.completionDate && (
          <p className="text-sm text-muted-foreground mt-2">
            Terminé le {game.completionDate}
          </p>
        )} */}

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground capitalize">
            {game.platformBuy}
          </span>
          <p title={`${game.completionDate && "game finish"}`}>
            <CheckCircleIcon
              className={`w-4 h-4 ${
                game.completionDate
                  ? "text-card-foreground"
                  : "text-muted-foreground"
              }`}
            />
          </p>
          <p title={`${game.note && "note"}`}>
            <NotebookText
              className={`w-4 h-4 ${
                game.note ? "text-card-foreground" : "text-muted-foreground"
              }`}
            />
          </p>
        </div>

        {/* {game.note && (
          <p
            className="text-xs text-muted-foreground mt-2 truncate"
            title={game.note}
          >
            {game.note}
          </p>
        )} */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Card>
  );
};

export default CardGame;
