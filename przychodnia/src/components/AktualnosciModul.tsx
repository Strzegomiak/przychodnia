import React from "react";
import { Link } from "react-router-dom";

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

interface AktualnosciModulProps {
  news: News;
  defaultPicture: { zdjecie: Zdjecie };
  size: string;
}

const AktualnosciModul: React.FC<AktualnosciModulProps> = ({
  news,
  defaultPicture,
  size,
}) => {
  return (
    <Link to="/aktualnosci" state={{ news, defaultPicture }}>
      <div
        className={`${
          size === "big" ? "flex-col text-l " : "flex text-sm justify-start"
        }   content-between py-5`}
      >
        {news.zdjecie && news.zdjecie.url ? (
          <div className="flex">
            {size === "big" ? (
              <img
                className="ImageRadius"
                src={news.zdjecie.url}
                alt={news.tytul}
                style={{ width: "685px", height: "390px" }}
              />
            ) : (
              <img
                className="ImageRadius Responsive-img"
                src={news.zdjecie.url}
                alt={news.tytul}
                style={{ width: "293px", height: "195px" }}
              />
            )}
          </div>
        ) : (
          defaultPicture && (
            <div className="flex">
              {size === "big" ? (
                <img
                  className="ImageRadius"
                  src={defaultPicture.zdjecie.url}
                  alt={news.tytul}
                  style={{ width: "685px", height: "390px" }}
                />
              ) : (
                <img
                  className="ImageRadius Responsive-img"
                  src={defaultPicture.zdjecie.url}
                  alt={news.tytul}
                  style={{ width: "293px", height: "195px" }}
                />
              )}
            </div>
          )
        )}
        <div
          className={`${
            size === "big" ? "" : "w-96"
          } flex-col px-5 content-between `}
          style={size === "big" ? { maxWidth: "685px" } : { height: "200px" }}
        >
          <h2
            className={`${
              size === "big" ? "text-xl py-5" : ""
            } text-center font-medium`}
          >
            {news.tytul}
          </h2>
          <br></br>
          <h2 className="text-left italic">{news.dataOpublikowania}</h2>
          <br></br>
          <h2
            className="text-left"
            style={size === "big" ? { height: "140px" } : { height: "140px" }}
          >
            {news.opisSkrotowy}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default AktualnosciModul;
