import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import useDoktorzy from "../hook/useDoktorzy";
import DenseTable from "../components/TabelaLekarze";

const PoradniePoz = () => {
  const PoradniePOZQuery = gql`
    {
      poradniaZaleszany123 {
        opis
      }
      poradniaTurbia123 {
        opis
      }
      poradniaZbydniow123 {
        opis
      }
      poradniaPoloznej123 {
        opis
      }
      poradniaPielegniarki123 {
        opis
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
  const { values } = useFetch(PoradniePOZQuery);
  const {
    valuesPoradniaZbydniow,
    valuesPoradniaZaleszany,
    valuesPoradniaTurbia,
  } = useDoktorzy(doktorzyKlinikiQuery);

  console.log(values);

  return (
    <div className="flex justify-center items-center AppEE">
      <div className="flex flex-col justify-center items-center w-10/12 bg-red-100 px-28 py-10 text-left">
        <h1 className="text-center">PORADNIE POZ:</h1>
        <br></br>
        <h2 className="text-center">Poradnia POZ w Zbydniowie</h2>
        {values &&
          values["poradniaZbydniow123"] &&
          values["poradniaZbydniow123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaZbydniow} />
        <br></br>
        <h2 className="text-center">Poradnia POZ w Zaleszanach</h2>
        {values &&
          values["poradniaZaleszany123"] &&
          values["poradniaZaleszany123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaZaleszany} />
        <br></br>
        <h2 className="text-center">Poradnia POZ w Turbi</h2>
        {values &&
          values["poradniaTurbia123"] &&
          values["poradniaTurbia123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaTurbia} />
        <br></br>
        <h1 className="text-center">Poradnia pielęgniarki POZ w Zbydniowie</h1>
        {values &&
          values["poradniaPielegniarki123"] &&
          values["poradniaPielegniarki123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
            </>
          ))}
        <br></br>
        <h1 className="text-center">Poradnia położnej POZ w Zbydniowie:</h1>
        <br></br>

        {values &&
          values["poradniaPoloznej123"] &&
          values["poradniaPoloznej123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.opis }}
              />
            </>
          ))}
        <br></br>
      </div>
    </div>
  );
};

export default PoradniePoz;
