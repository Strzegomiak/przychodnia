import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";

const KartaPraw = () => {
  const query = gql`
    {
      kartaPraw123 {
        opis {
          html
        }
      }
    }
  `;
  const nameAPI = "kartaPraw123";
  const { values } = useFetch(query);

  return (
    <div className="flex justify-center content-center">
      <div className="flex-col justify-center items-center  w-10/12 bg-red-100 px-28 py-10">
        <h1>Karta Praw</h1>
        <br></br>
        {values &&
          values[nameAPI] &&
          values[nameAPI].map((item: any) => (
            <div
              key={item.id}
              className="whitespace-pre-wrap "
              dangerouslySetInnerHTML={{ __html: item.opis.html }}
            />
          ))}
      </div>
    </div>
  );
};

export default KartaPraw;
