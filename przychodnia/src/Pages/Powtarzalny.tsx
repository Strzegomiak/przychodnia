import useFetch from "../hook/useFetch";

const Powtarzalny = ({
  query,
  nameAPI,
  title,
}: {
  query: any;
  nameAPI: any;
  title: any;
}) => {
  const { values } = useFetch(query);

  return (
    <div className="flex justify-center items-center AppEE">
      <div className="flex flex-col justify-center items-center w-10/12 bg-red-100 px-28 py-10 text-left">
        <h1 className="text-center">{title}</h1>
        <br></br>
        {values &&
          values[nameAPI] &&
          values[nameAPI].map((item: any) => (
            <h2
              key={item.id}
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: item.opis }}
            />
          ))}
      </div>
    </div>
  );
};

export default Powtarzalny;
