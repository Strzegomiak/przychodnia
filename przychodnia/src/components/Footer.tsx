const Footer = () => {
  return (
    <footer className="flex justify-center content-center ">
      <div className="flex justify-center items-center w-10/12 h-52 bg-red-300 gap-20 text-xl">
        <div className="flex-col ">
          <h2 className="font-bold">
            Samodzielny Publiczny Gminny Zakład Opieki Zdrowotnej <br /> w
            Zaleszanach z/s w Zbydniowie
          </h2>
          <h2>ul. Parkowa 8 37-415 Zbydniów</h2>
          <h2 className="font-bold">
            NIP 8652143037 REGON 830457866 KRS 0000009892
          </h2>
        </div>
        <div className="flex-col">
          <h2 className="font-bold">Kierownik</h2>
          <h2>lek.med. Małgorzata Szczykutowicz-Bryniak</h2>
          <h2 className="font-bold">Telefon</h2>
          <h2>tel. 15 845 83 05</h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
