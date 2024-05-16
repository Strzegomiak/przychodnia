import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

const PracowniaRehabilitacji = () => {
  const PoradniePOZQuery = gql`
    {
      pracowniaRehabilitacji123 {
        opis
      }
    }
  `;

  const { values } = useFetch(PoradniePOZQuery);

  return (
    <div className="flex justify-center items-center AppEE">
      <div className="flex flex-col justify-center items-center w-10/12 bg-red-100 px-28 py-10 text-left">
        <h1 className="text-center">Pracownia rehabilitacji:</h1>
        <br></br>

        {values &&
          values["pracowniaRehabilitacji123"] &&
          values["pracowniaRehabilitacji123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: item.opis,
                }}
              />
            </>
          ))}
        <Link to={"/cennik"}>
          <h1>(Cennik)</h1>
        </Link>
      </div>
    </div>
  );
};

export default PracowniaRehabilitacji;
