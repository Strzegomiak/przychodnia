const AktualnosciModul = ({ news }: any) => {

    //zrobic tak ze jak niema zdjecia to aby dobral losowe domyslne
  return (
    <div className="flex-col bg-red-6">
      {news.zdjecie && news.zdjecie.url ? (
        <img src={news.zdjecie.url} alt={news.tytul} />
      ) : null}
      <h2 className="text-center">{news.tytul}</h2>
      <h2 className="text-center">{news.dataOpublikowania}</h2>
      <h2 className="text-center">{news.opisSkrotowy}</h2>
    </div>
  );
};

export default AktualnosciModul;
