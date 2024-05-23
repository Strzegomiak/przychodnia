import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import useDoktorzy from "../hook/useDoktorzy";
import DenseTable from "../components/TabelaLekarze";

const PoradnieStomatologiczne = () => {
  const PoradnieStomatologiczneQuery = gql`
    {
      poradnieStomatologiczne123 {
        opisZaleszany
        opisTurbia
        opisZbydniow
      }
    }
  `;
  const doktorzyKlinikiQuery = gql`
    {
      doktorzyKliniki123(first: 100) {
        kliniki
        nazwisko
        dni
        specjalizacja
      }
    }
  `;
  const { values } = useFetch(PoradnieStomatologiczneQuery);
  const {
    valuesPoradniaStomatologiiZbydniow,
    valuesPoradniaStomatologiiZaleszany,
    valuesPoradniaStomatologiiTurbia,
  } = useDoktorzy(doktorzyKlinikiQuery);

  return (
    <div className="flex justify-center items-center AppEE bg-red-100">
      <div className="flex flex-col justify-center items-center w-10/12  px-28 py-10 text-left gap-4">
        <h1 className="text-center">Poradnie stomatologiczne</h1>
        {values &&
          values["poradnieStomatologiczne123"] &&
          values["poradnieStomatologiczne123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opisZbydniow }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaStomatologiiZbydniow} />
        {values &&
          values["poradnieStomatologiczne123"] &&
          values["poradnieStomatologiczne123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opisZaleszany }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaStomatologiiZaleszany} />
        {values &&
          values["poradnieStomatologiczne123"] &&
          values["poradnieStomatologiczne123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opisTurbia }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaStomatologiiTurbia} />
        <br></br>
      </div>
    </div>
  );
};

export default PoradnieStomatologiczne;
