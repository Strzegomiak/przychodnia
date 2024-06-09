import { Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <header className="flex justify-center content-center relative HeaderAndFooter">
      <div className="flex justify-center items-center my-7 mx-7 w-full h-auto ">
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
