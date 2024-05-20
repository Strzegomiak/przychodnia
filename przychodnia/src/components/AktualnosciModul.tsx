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
  defaultPicture: Array<{ zdjecie: Zdjecie }>;
}

const AktualnosciModul: React.FC<AktualnosciModulProps> = ({
  news,
  defaultPicture,
}) => {
  const randomNumber = Math.floor(Math.random() * 9);

  return (
    <div className="flex-col bg-red-6 bg-blue-200">
      {news.zdjecie && news.zdjecie.url ? (
        <img src={news.zdjecie.url} alt={news.tytul} />
      ) : (
        defaultPicture[randomNumber] && (
          <img
            src={defaultPicture[randomNumber].zdjecie.url}
            alt={news.tytul}
          />
        )
      )}
      <h2 className="text-center">{news.tytul}</h2>
      <h2 className="text-center">{news.dataOpublikowania}</h2>
      <h2 className="text-center">{news.opisSkrotowy}</h2>
    </div>
  );
};

export default AktualnosciModul;
