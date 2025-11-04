import getConsoleColor from "@/helpers/getConsoleColor";
import Game from "@/models/Game";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

type GameProps = {
  game: Game;
};
const CardGame = ({ game }: GameProps) => {
  const note = game.rating ? game.rating : 0;

  return (
    <Card onClick={() => alert("edit")} className="hover:cursor-pointer group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {game.title}
              {game.type === "dlc" && <span className="text-xs text-muted-foreground">{" "}(DLC)</span>}
              {game.type === "+dlc" && <span className="text-xs">{" "}(+DLC)</span>}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${getConsoleColor(
                  game.console
                )}`}
              >
                {game.console}
              </span>
              {game.hourPlay && (
                <span className="text-sm text-muted-foreground">
                  {game.hourPlay}h
                </span>
              )}
              <span className="text-sm text-muted-foreground">{game.year}</span>
              <span className="text-sm text-muted-foreground capitalize">
                {game.platformBuy}
              </span>
            </div>
          </div>
          {/* <Button
            variant="outline"
            size="icon"
            onClick={() => alert("edit")}
            // className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
            className="group-hover:opacity-100 transition-opacity hover:text-primary"
          >
            <Trash2 className="h-4 w-4" /> 
            <Edit2Icon className="h-4 w-4" />
          </Button> */}
        </div>

        {note > 0 && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < note ? "fill-primary text-primary" : "text-muted"
                }`}
              />
            ))}
          </div>
        )}

        {game.completionDate && (
          <p className="text-sm text-muted-foreground mt-2">
            Terminé le {game.completionDate}
          </p>
        )}

        {game.note && (
          <p
            className="text-xs text-muted-foreground mt-2 truncate"
            title={game.note}
          >
            {game.note}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Card>
  );
};

export default CardGame;
