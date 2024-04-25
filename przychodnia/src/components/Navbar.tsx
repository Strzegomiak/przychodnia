// import { useState } from "react";

// const Navbar = () => {
//   const [flag1, setFlag1] = useState(false);
//   const [flag2, setFlag2] = useState(false);
//   const [flag3, setFlag3] = useState(false);

//   const openProfile1 = () => setFlag1((prev) => !prev);
//   const openProfile2 = () => setFlag2((prev) => !prev);
//   const openProfile3 = () => setFlag3((prev) => !prev);

//   return (
//     <nav className="flex justify-center content-center bg-red-400 w-full h-24 ">
//       <ul className="flex gap-12 items-center text-2xl relative">
//         <li>Start</li>
//         <li onClick={() => openProfile1()}>O nas</li>
//         {flag1 && (
//           <div className="absolute h-22 inset-y-24 inset-x-20 w-32">
//             <ul className="bg-red-600 p-4 gap-2">
//               <li>Historia</li>
//               <li>Dyrekcja</li>
//             </ul>
//           </div>
//         )}
//         <li onClick={() => openProfile2()}>Dla pacjenta</li>
//         {flag2 && (
//           <div className="absolute h-22 inset-y-24 inset-x-48 w-60">
//             <ul className="bg-blue-600 p-4 gap-2">
//               <li>Karta Praw Pacjenta</li>
//               <li>RODO</li>
//               <li>Skargi i wnioski</li>
//               <li>Pliki do pobrania</li>
//               <li>Cennik</li>
//             </ul>
//           </div>
//         )}
//         <li onClick={() => openProfile3()}>Działalność medyczna</li>
//         {flag3 && (
//           <div className="absolute h-22 inset-y-24 inset-x-96 w-80">
//             <ul className="bg-green-600 p-4 gap-2">
//               <li>Poradnie POZ</li>
//               <li>Poradnie specjalistyczne</li>
//               <li>Poradnie stomatologiczne</li>
//               <li>Poradnie rehabilitacji</li>
//               <li>Programy profilaktyczne</li>
//               <li>Opieka całodobowa</li>
//             </ul>
//           </div>
//         )}
//         <li>Kontakt</li>
//       </ul>
//     </nav>
//   );
// };
// export default Navbar;import { useState, useRef } from "react";

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
              <li>Dyrekcja</li>
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
              <li>Karta Praw Pacjenta</li>
              <li>RODO</li>
              <li>Skargi i wnioski</li>
              <li>Pliki do pobrania</li>
              <li>Cennik</li>
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
              <li>Poradnie POZ</li>
              <li>Poradnie specjalistyczne</li>
              <li>Poradnie stomatologiczne</li>
              <li>Poradnie rehabilitacji</li>
              <li>Programy profilaktyczne</li>
              <li>Opieka całodobowa</li>
            </ul>
          </div>
        )}
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};
export default Navbar;
