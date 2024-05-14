import { gql } from "graphql-request";
import DenseTable from "../components/Tabela";
import useCennik from "../hook/useCennik";

const Cennik = () => {
  const cennikQuery = gql`
    {
      cennik123(first: 100) {
        cena
        cenaAlternatywna
        klinika
        nazwa
      }
    }
  `;
  const { data } = useCennik(cennikQuery);
  console.log(data);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-10/12 bg-red-100 px-28 py-10 text-left">
        <h1 className="text-center">
          Cennik usług obowiązujący w Samodzielnym Publicznym Gminny Zakładzie
          Opieki Zdrowotnej w Zaleszanach z/s w Zbydniowie
        </h1>
        <br></br>
        {/* {values &&
          values[nameAPI] &&
          values[nameAPI].map((item: any) => (
            <div
              key={item.id}
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: item.opis }}
            />
          ))} */}
        <div>
          <DenseTable />
        </div>
      </div>
    </div>
  );
};

export default Cennik;
