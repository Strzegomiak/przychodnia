import LogoLinks from "../components/LogoLinks";
import MapGoogle from "../components/MapGoogle";
import News from "../components/News";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <main className="flex-col justify-center content-center ">
      <Photo />
      <News />
      <LogoLinks />
      <MapGoogle />
    </main>
  );
};

export default Home;
