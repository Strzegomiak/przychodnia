import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import useDoktorzy from "../hook/useDoktorzy";
import DenseTable from "../components/TabelaLekarze";

const PoradnieSpecjalistyczne = () => {
  const PoradniePOZQuery = gql`
    {
      poradnieSpecjalistyczne123 {
        poradniaGinekologicznoPoloznicza
        poradniaRehabilitacyjna
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
    valuesPoradniaGinekologicznoPoloznicza,
    valuesPoradniaRehabilitacyjna,
  } = useDoktorzy(doktorzyKlinikiQuery);

  console.log(values);

  return (
    <div className="flex justify-center items-center AppEE bg-red-100">
      <div className="flex flex-col justify-center items-center w-10/12 px-28 py-10 text-left gap-4">
        <h1 className="text-center">Poradnie specjalistyczne</h1>
        {values &&
          values["poradnieSpecjalistyczne123"] &&
          values["poradnieSpecjalistyczne123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: item.poradniaGinekologicznoPoloznicza,
                }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaGinekologicznoPoloznicza} />
        <br></br>
        {values &&
          values["poradnieSpecjalistyczne123"] &&
          values["poradnieSpecjalistyczne123"].map((item: any) => (
            <>
              <h2
                key={item.id}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: item.poradniaRehabilitacyjna,
                }}
              />
            </>
          ))}
        <DenseTable valuesArray={valuesPoradniaRehabilitacyjna} />
        <br></br>
      </div>
    </div>
  );
};

export default PoradnieSpecjalistyczne;
