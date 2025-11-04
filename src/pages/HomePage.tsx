import CardGame from "@/components/CardGame";
import FiltersGames from "@/components/home/FiltersGames";
import CustomNavbar from "@/components/layout/CustomNavbar";
import { GamesMockList } from "@/helpers/GamesMockList";

const HomePage = () => {
  const list = GamesMockList
  return (
    <div>
      <CustomNavbar />
      <div className="contenu">
        <div className="mt-5">
          <FiltersGames />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
