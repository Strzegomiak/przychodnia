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

  const {
    valuesGinekologia,
    valuesPoz,
    valuesZabiegowy,
    valuesPoradniaRehabilitacyjna,
    valuesRehabilitacja,
  } = useCennik(cennikQuery);

  console.log(valuesGinekologia);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-10/12 bg-red-100 px-28 py-10 text-left">
        <h1 className="text-center">
          Cennik usług obowiązujący w Samodzielnym Publicznym Gminny Zakładzie
          Opieki Zdrowotnej w Zaleszanach z/s w Zbydniowie
        </h1>
        <br></br>
        <div>
          <div>
            <h2>PORADNIA POZ</h2>
            <DenseTable valuesArray={valuesPoz} />
            <br></br>
          </div>
          <div>
            <h2>PORADNIA GINEKOLOGICZNA</h2>
            <DenseTable valuesArray={valuesGinekologia} />
          </div>
          <br></br>
          <div>
            <h2>PORADNIA REHABILITACYJNA</h2>
            <DenseTable valuesArray={valuesPoradniaRehabilitacyjna} />
          </div>
          <br></br>

          <div>
            <h2>GABINET ZABIEGOWY</h2>
            <DenseTable valuesArray={valuesRehabilitacja} />
          </div>
          <br></br>
          <div>
            <h2>REHABILITACJA</h2>
            <DenseTable valuesArray={valuesZabiegowy} />
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Cennik;
