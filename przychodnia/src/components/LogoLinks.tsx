const LogoLinks = () => {
  return (
    <div className="flex-col justify-center content-center w-full">
      <div className="flex">
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/nfz.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/dietynfz.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/pacjentgov.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/rrs.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/informator.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
        <div className="flex items-center justify-center w-5/12 cursor-pointer">
          <img
            src="../images/szpitalstalowa.png"
            alt="nfz"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
      </div>
      <div className="flex justify-center content-center w-full">
        <div className="flex items-center justify-center w-4/12 cursor-pointer">
          <img
            src="../images/RPP.jpg"
            alt="rpp"
            className=""
            onClick={() => (window.location.href = "https://www.google.pl")}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoLinks;
