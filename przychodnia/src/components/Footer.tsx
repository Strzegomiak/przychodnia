const Footer = () => {
  return (
    <footer className="flex justify-center content-center w-full bg-red-300">
      <div className="flex justify-center items-center h-56  gap-20 text-xl">
        <div className="flex-col flex gap-1">
          <h2 className="font-medium">
            Samodzielny Publiczny Gminny Zakład Opieki Zdrowotnej
          </h2>
          <h2 className="font-medium Podkreslenie">
            w Zaleszanach z/s w Zbydniowie
          </h2>
          <br></br>
          <h2>ul. Parkowa 8 37-415 Zbydniów</h2>
          <h2>NIP 8652143037 REGON 830457866 KRS 0000009892</h2>
        </div>
        <div className="flex-col flex gap-1">
          <h2 className="font-medium Podkreslenie">Kierownik</h2>
          <h2>lek.med. Małgorzata Szczykutowicz-Bryniak</h2>
          <br></br>

          <h2 className="font-medium Podkreslenie">Telefon</h2>
          <h2>tel. 15 845 83 05</h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
