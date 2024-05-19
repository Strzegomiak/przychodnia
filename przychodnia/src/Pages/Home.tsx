import Aktualnosci from "../components/Aktualnosci";
import LogoLinks from "../components/LogoLinks";
import MapGoogle from "../components/MapGoogle";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <main className="flex-col justify-center content-center ">
      <Photo />
      <Aktualnosci />
      <LogoLinks />
      <MapGoogle />
    </main>
  );
};

export default Home;
