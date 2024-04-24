const HeaderInfo = () => {
  return (
    <header className="flex justify-center content-center relative">
      <div className="flex justify-center items-center  w-10/12 h-36 bg-red-300 ">
        <h1 className="flex w-5/12 bg-red-100 justify-center text-3xl text-center">
          Samodzielny Publiczny Gminny <br /> Zakład Opieki Zdrowotnej <br /> w
          Zaleszanach z/s w Zbydniowie
        </h1>
        <div className="flex w-60 justify-center items-center bg-red-700 absolute right-48">
          licznik
        </div>
      </div>
    </header>
  );
};

export default HeaderInfo;
