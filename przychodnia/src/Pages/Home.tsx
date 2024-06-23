import { useEffect, useState } from "react";
import AktualnosciHome from "../components/AktualnosciHome";
import LogoLinks from "../components/LogoLinks";
import MapGoogle from "../components/MapGoogle";
import Photo from "../components/Photo";
import DownArrowIcon from "../components/DownArrowIcon";

const Home = () => {
  const [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.5 * window.innerHeight) {
        setArrowVisible(false);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <main className="flex-col justify-center content-center ">
      <Photo />
      {arrowVisible && <DownArrowIcon />}
      <AktualnosciHome />
      <LogoLinks />
      <MapGoogle />
    </main>
  );
};

export default Home;
