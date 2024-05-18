import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [delayedClose, setDelayedClose] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (profile: string) => {
    setActiveProfile(profile);
    if (delayedClose) clearTimeout(delayedClose);
  };

  const handleMouseLeave = () => {
    setDelayedClose(
      setTimeout(() => {
        setActiveProfile(null);
      }, 500)
    );
  };

  return (
    <nav className="flex justify-center content-center bg-red-400 w-full h-24 ">
      <ul className="flex gap-12 items-center text-2xl relative">
        <Link to={"/"}>
          <li>Start</li>
        </Link>
        <li
          onMouseEnter={() => handleMouseEnter("profile1")}
          onMouseLeave={handleMouseLeave}
        >
          O nas
        </li>
        {activeProfile === "profile1" && (
          <div
            className="absolute h-22 inset-y-24 inset-x-20 w-32"
            onMouseEnter={() => handleMouseEnter("profile1")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="bg-red-600 p-4 gap-2">
              <Link to={"/historia"}>
                <li>Historia</li>
              </Link>
              <Link to={"/dyrekcja"}>
                <li>Dyrekcja</li>
              </Link>
            </ul>
          </div>
        )}
        <li
          onMouseEnter={() => handleMouseEnter("profile2")}
          onMouseLeave={handleMouseLeave}
        >
          Dla pacjenta
        </li>
        {activeProfile === "profile2" && (
          <div
            className="absolute h-22 inset-y-24 inset-x-48 w-60"
            onMouseEnter={() => handleMouseEnter("profile2")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="bg-blue-600 p-4 gap-2">
              <Link to={"/kartapraw"}>
                <li>Karta Praw Pacjenta</li>
              </Link>
              <Link to={"/rodo"}>
                <li>RODO</li>
              </Link>
              <Link to={"/skargiiwnioski"}>
                <li>Skargi i wnioski</li>
              </Link>
              <Link to={"/plikidopobrania"}>
                <li>Pliki do pobrania</li>
              </Link>
              <Link to={"/cennik"}>
                <li>Cennik</li>
              </Link>
            </ul>
          </div>
        )}
        <li
          onMouseEnter={() => handleMouseEnter("profile3")}
          onMouseLeave={handleMouseLeave}
        >
          Działalność medyczna
        </li>
        {activeProfile === "profile3" && (
          <div
            className="absolute h-22 inset-y-24 inset-x-96 w-80"
            onMouseEnter={() => handleMouseEnter("profile3")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="bg-green-600 p-4 gap-2">
              <Link to={"/poradniepoz"}>
                <li>Poradnie POZ</li>
              </Link>
              <Link to={"/poradniespecjalistyczne"}>
                <li>Poradnie specjalistyczne</li>
              </Link>
              <Link to={"/poradniestomatologiczne"}>
                <li>Poradnie stomatologiczne</li>
              </Link>
              <Link to={"/pracowniarehabilitacji"}>
                <li>Pracownia rehabilitacji</li>
              </Link>
              <Link to={"/badaniaprofilaktyczne"}>
                <li>Programy profilaktyczne</li>
              </Link>
              <Link to={"/opiekacalodobowa"}>
                <li>Opieka całodobowa</li>
              </Link>
            </ul>
          </div>
        )}
        <Link to={"/kontakt"}>
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
