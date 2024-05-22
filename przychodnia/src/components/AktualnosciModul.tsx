import React from "react";

interface Zdjecie {
  url: string;
}

interface News {
  tytul: string;
  dataOpublikowania: string;
  opisSkrotowy: string;
  zdjecie?: Zdjecie;
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
    <div
      className={`${
        size === "big" ? "flex-col text-l " : "flex text-sm justify-start"
      } bg-red-700  content-between py-5 `}
    >
      {news.zdjecie && news.zdjecie.url ? (
        <img
          src={news.zdjecie.url}
          alt={news.tytul}
          style={
            size === "big"
              ? { width: "685px", height: "390px" }
              : { width: "293px", height: "195px" }
          }
        />
      ) : (
        defaultPicture && (
          <img
            src={defaultPicture.zdjecie.url}
            alt={news.tytul}
            style={
              size === "big"
                ? { width: "685px", height: "390px" }
                : { width: "293px", height: "195px" }
            }
          />
        )
      )}
      <div
        className={`${
          size === "big" ? "" : "w-96"
        } flex-col px-5 content-between bg-yellow-200`}
        style={size === "big" ? { width: "685px" } : { height: "200px" }}
      >
        <h2
          className={`${
            size === "big" ? "text-xl font-bold py-5" : ""
          } text-center`}
        >
          {news.tytul}
        </h2>
        <br></br>
        <h2 className="text-left italic">{news.dataOpublikowania}</h2>
        <br></br>
        <h2 className="text-left">{news.opisSkrotowy}</h2>
      </div>
    </div>
  );
};

export default AktualnosciModul;
