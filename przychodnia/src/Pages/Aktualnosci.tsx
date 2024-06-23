import React from "react";
import { useLocation } from "react-router-dom";

interface Zdjecie {
  url: string;
}

interface News {
  tytul: string;
  dataOpublikowania: string;
  opisSkrotowy: string;
  zdjecie?: Zdjecie;
  opis: string;
}

interface AktualnosciProps {
  news?: News;
  defaultPicture?: { zdjecie: Zdjecie };
}

const Aktualnosci: React.FC<AktualnosciProps> = () => {
  const location = useLocation();
  const { news, defaultPicture } = location.state || {};

  console.log(news, defaultPicture);

  return (
    <div className="flex justify-center items-center AppEE  ">
      <div className="flex flex-col justify-center items-center w-10/12  px-28 py-12 text-left ">
        {news && news.zdjecie && news.zdjecie.url ? (
          <img
            className="ImageRadius"
            src={news.zdjecie.url}
            alt={news.tytul}
            style={{ maxWidth: "685px" }}
          />
        ) : (
          news &&
          defaultPicture && (
            <img
              className="ImageRadius"
              src={defaultPicture.zdjecie.url}
              alt={news.tytul}
            />
          )
        )}
        <div className={`flex-col px-5 content-between `}>
          <h2 className={`text-xl py-5 font-medium text-center`}>
            {news && news.tytul}
          </h2>
          <h2 className="text-left italic">{news && news.dataOpublikowania}</h2>
          <br></br>
          <h2 className="text-left" style={news && { width: "800px" }}>
            {news && news.opis}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Aktualnosci;
