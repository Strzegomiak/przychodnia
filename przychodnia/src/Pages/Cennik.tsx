import { gql } from "graphql-request";
import DenseTable from "../components/TabelaCennik";
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
    <div className="flex justify-center items-center bg-red-100">
      <div className="flex flex-col justify-center items-center w-10/12  px-28 py-10 text-left">
        <h1 className="text-center">Cennik usług</h1>
        <br></br>
        <h2 className="text-center">
          Obowiązujący w Samodzielnym Publicznym Gminny Zakładzie Opieki
          Zdrowotnej w Zaleszanach z/s w Zbydniowie
        </h2>
        <br></br>
        <div>
          <div className="flex flex-col gap-2">
            <h2>Poradnia POZ</h2>
            <DenseTable valuesArray={valuesPoz} />
          </div>
          <br></br>
          <div className="flex flex-col gap-2">
            <h2>Poradnia Ginekologiczna</h2>
            <DenseTable valuesArray={valuesGinekologia} />
          </div>
          <br></br>
          <div className="flex flex-col gap-2">
            <h2>Poradnia rehabilitacyjna</h2>
            <DenseTable valuesArray={valuesPoradniaRehabilitacyjna} />
          </div>
          <br></br>

          <div className="flex flex-col gap-2">
            <h2>Gabinet zabiegowy</h2>
            <DenseTable valuesArray={valuesRehabilitacja} />
          </div>
          <br></br>
          <div className="flex flex-col gap-2">
            <h2>Rehabilitacja</h2>
            <DenseTable valuesArray={valuesZabiegowy} />
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Cennik;
