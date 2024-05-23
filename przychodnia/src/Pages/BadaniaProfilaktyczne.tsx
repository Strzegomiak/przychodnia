import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";

const BadaniaProfilaktyczne = () => {
  const badaniaProfilaktyczneQuery = gql`
    {
      badaniaProfilaktyczne123 {
        opis
        tytulBadania
        id
      }
    }
  `;
  const { values } = useFetch(badaniaProfilaktyczneQuery);
  const nameAPI = "badaniaProfilaktyczne123";
  console.log(values);

  return (
    <div className="flex justify-center items-center AppEE bg-red-100">
      <div className="flex flex-col justify-center items-center w-10/12   px-28 py-10 text-left">
        <h1 className="text-center">Badania Profilaktyczne</h1>
        <br></br>
        {values &&
          values[nameAPI] &&
          values[nameAPI].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.tytulBadania }}
              />
              <br></br>

              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
              <br></br>
            </>
          ))}
      </div>
    </div>
  );
};

export default BadaniaProfilaktyczne;
