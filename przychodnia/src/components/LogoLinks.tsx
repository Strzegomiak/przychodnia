const LogoLinks = () => {
  return (
    <div className=" flex-col justify-center content-center w-full bg-white">
      <div className=" HeaderAndFooter flex justify-center content-center w-full">
        <div className="flex items-center justify-center md:w-4/12 w-11/12  cursor-pointer">
          <img
            src="../images/RPP.jpg"
            title="Rzecznik Praw Pacjenta"
            alt="Rzecznik Praw Pacjenta"
            className="ImageRadius"
            onClick={() =>
              (window.location.href = "https://www.gov.pl/web/rpp/kontakt")
            }
          />
        </div>
      </div>
      <div className="flex  md:flex-nowrap flex-wrap items-center justify-center">
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/nfz.png"
            title="Narodowy Fundusz Zdrowia"
            alt="Narodowy Fundusz Zdrowia"
            className=""
            onClick={() =>
              (window.location.href =
                "https://www.nfz.gov.pl/dla-pacjenta/poradnik-pacjenta/")
            }
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/dietynfz.png"
            title="Diety NFZ"
            alt="Diety NFZ"
            className=""
            onClick={() => (window.location.href = "https://diety.nfz.gov.pl/")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/pacjentgov.png"
            title="Pacjent gov"
            alt="Pacjent gov"
            className=""
            onClick={() => (window.location.href = "https://pacjent.gov.pl/")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/rrs.png"
            title="Rzecznik Praw Pacjenta"
            alt="Rzecznik Praw Pacjenta"
            className=""
            onClick={() =>
              (window.location.href = "https://www.gov.pl/web/rpp/kontakt")
            }
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/informator.png"
            alt="Informator NFZ"
            title="Informator NFZ"
            className=""
            onClick={() =>
              (window.location.href = "https://terminyleczenia.nfz.gov.pl/")
            }
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/szpitalstalowa.png"
            title="Szpital Stalowa Wola"
            alt="Szpital Stalowa Wola"
            className=""
            onClick={() =>
              (window.location.href = "https://www.szpital-stw.com/")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LogoLinks;
