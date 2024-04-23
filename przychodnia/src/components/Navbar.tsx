const Navbar = () => {
  return (
    <nav className="flex justify-center content-center bg-red-400 w-full h-24">
      <ul className="flex gap-10">
        <li>Start</li>
        <li>O nas</li>
        <ul className="hidden">
          <li>Historia</li>
          <li>Dyrekcja</li>
        </ul>
        <li>Dla pacjenta</li>
        <ul className="hidden">
          <li>Karta Praw Pacjenta</li>
          <li>RODO</li>
          <li>Skargi i wnioski</li>
          <li>Pliki do pobrania</li>
          <li>Cennik</li>
        </ul>
        <li>Działalność medyczna</li>
        <ul className="hidden">
          <li>Poradnie POZ</li>
          <li>Poradnie specjalistyczne</li>
          <li>Poradnie stomatologiczne</li>
          <li>Poradnie rehabilitacji</li>
          <li>Programy profilaktyczne</li>
          <li>Opieka całodobowa</li>
        </ul>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};
export default Navbar;
