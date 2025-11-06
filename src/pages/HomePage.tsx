import CardGame from "@/components/CardGame";
import FiltersGames from "@/components/home/FiltersGames";
import CustomNavbar from "@/components/layout/CustomNavbar";
import { GamesMockList } from "@/helpers/GamesMockList";

const HomePage = () => {
  const list = GamesMockList

    //   const date = new Date();
    //   const year = date.getFullYear();
  
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedYear, setSelectedYear] = useState<string>(year.toString());
    // const [selectedConsole, setSelectedConsole] = useState<string>("all");

  return (
    <div>
      <CustomNavbar />
      <div className="contenu">
        <div className="mt-5">
          <FiltersGames games={list.length}/>
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
