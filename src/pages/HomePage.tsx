import FiltersGames from "@/components/home/FiltersGames";
import CustomNavbar from "@/components/layout/CustomNavbar";

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="contenu">
        <div className="mt-5">
          <FiltersGames />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
