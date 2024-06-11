import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import useDoktorzy from "../hook/useDoktorzy";
import DenseTable from "../components/TabelaLekarze";

const PoradniePoz = () => {
  const PoradniePOZQuery = gql`
    {
      poradniePoz123 {
        opisPielegniarka
        opisPolozna
        opisTurbia
        opisZaleszany
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
  const { values } = useFetch(PoradniePOZQuery);
  const {
    valuesPoradniaZbydniow,
    valuesPoradniaZaleszany,
    valuesPoradniaTurbia,
  } = useDoktorzy(doktorzyKlinikiQuery);

  console.log(values);

  return (
    <div className="flex justify-center items-center AppEE  ">
      <div className="AppMobile flex flex-col justify-center items-center w-10/12   px-28 py-7 text-left">
        <div className="AppMobile flex flex-col justify-center items-center w-10/12   px-28 py-7 text-left gap-4">
          <h1 className="text-center">Poradnie POZ</h1>
          <h2 className="text-center">Poradnia POZ w Zbydniowie</h2>
          {values &&
            values["poradniePoz123"] &&
            values["poradniePoz123"].map((item: any) => (
              <>
                <h2
                  key={item.id}
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.opisZbydniow }}
                />
              </>
            ))}
          <DenseTable valuesArray={valuesPoradniaZbydniow} />
          <br></br>
          <h2 className="text-center">Poradnia POZ w Zaleszanach</h2>
          {values &&
            values["poradniePoz123"] &&
            values["poradniePoz123"].map((item: any) => (
              <>
                <h2
                  key={item.id}
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.opisZaleszany }}
                />
              </>
            ))}
          <DenseTable valuesArray={valuesPoradniaZaleszany} />
          <br></br>
          <h2 className="text-center">Poradnia POZ w Turbi</h2>
          {values &&
            values["poradniePoz123"] &&
            values["poradniePoz123"].map((item: any) => (
              <>
                <h2
                  key={item.id}
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.opisTurbia }}
                />
              </>
            ))}
          <DenseTable valuesArray={valuesPoradniaTurbia} />
          <br></br>
          <h1 className="text-center">
            Poradnia pielęgniarki POZ w Zbydniowie
          </h1>
          {values &&
            values["poradniePoz123"] &&
            values["poradniePoz123"].map((item: any) => (
              <>
                <h2
                  key={item.id}
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.opisPielegniarka }}
                />
              </>
            ))}
          <br></br>
          <h1 className="text-center">Poradnia położnej POZ w Zbydniowie</h1>

          {values &&
            values["poradniePoz123"] &&
            values["poradniePoz123"].map((item: any) => (
              <>
                <h2
                  key={item.id}
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.opisPolozna }}
                />
              </>
            ))}
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default PoradniePoz;
