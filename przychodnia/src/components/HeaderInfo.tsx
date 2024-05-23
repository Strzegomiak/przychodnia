import { Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <header className="flex justify-center content-center relative">
      <div className="flex justify-center items-center  w-full h-36 bg-red-300 ">
        <Link to={"/"}>
          <h1 className="flex font-medium  justify-center text-3xl text-center">
            Samodzielny Publiczny Gminny <br /> Zakład Opieki Zdrowotnej <br />{" "}
            w Zaleszanach z/s w Zbydniowie
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default HeaderInfo;
