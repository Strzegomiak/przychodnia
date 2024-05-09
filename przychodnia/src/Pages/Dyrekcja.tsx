import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";

const Dyrekcja = () => {
  const query = gql`
    {
      dyrekcja123 {
        opis
      }
    }
  `;
  const nameAPI = "dyrekcja123";
  const { values } = useFetch(query);

  return (
    <div className="flex justify-center content-center relative">
      <div className="flex-col justify-center items-center  w-10/12 bg-red-100 px-28 py-10">
        <h1>Dyrekcja</h1>
        <br></br>
        {values &&
          values[nameAPI] &&
          values[nameAPI].map((item: any) => (
            <div
              key={item.id}
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: item.opis }}
            />
          ))}
      </div>
    </div>
  );
};

export default Dyrekcja;
