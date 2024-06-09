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
    <nav className="NavbarStyle flex justify-center content-center w-full h-auto">
      <ul className=" flex flex-row flex-wrap-reverse gap-2 justify-center items-center text-2xl relative my-5">
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
            className="navbarMenu111 absolute h-22  w-32"
            onMouseEnter={() => handleMouseEnter("profile1")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="NavbarUL p-4 gap-2 w-44">
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
            className="navbarMenu222 absolute h-22 w-72"
            onMouseEnter={() => handleMouseEnter("profile2")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="NavbarUL p-4 gap-2 w-80">
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
            className="navbarMenu333 absolute h-22  w-96"
            onMouseEnter={() => handleMouseEnter("profile3")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveProfile(null)}
          >
            <ul className="NavbarUL p-4 gap-2">
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
