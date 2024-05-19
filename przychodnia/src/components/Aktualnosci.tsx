import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import AktualnosciModul from "./AktualnosciModul";

const aktualnosciQuery = gql`
  {
    aktualnosci123 {
      id
      opis
      opisSkrotowy
      tytul
      zdjecie {
        url
        id
      }
      dataOpublikowania
    }
  }
`;
// [1,2,3] jak dodajemy nowe [1,2,3,4] wiec zawsze 4 ostatnie ma brać z czego ostatnie to MAIN
const Aktualnosci = () => {
  const { values } = useFetch(aktualnosciQuery);
  let reverseValues;
  if (values && values["aktualnosci123"]) {
    reverseValues = [...values["aktualnosci123"]].reverse();
  }

  console.log(reverseValues);

  return (
    <div className="flex justify-center content-center AppDD w-full bg-red-300">
      <div className="flex w-10/12  items-center bg-red-500">
        {reverseValues && reverseValues[0] ? (
          <AktualnosciModul news={reverseValues[0]} />
        ) : null}
      </div>
      <div className="flex-col w-10/12  items-center bg-red-500">
        {reverseValues && reverseValues[1] ? (
          <AktualnosciModul news={reverseValues[1]} />
        ) : null}
        {reverseValues && reverseValues[2] ? (
          <AktualnosciModul news={reverseValues[2]} />
        ) : null}
        {reverseValues && reverseValues[3] ? (
          <AktualnosciModul news={reverseValues[3]} />
        ) : null}
      </div>
    </div>
  );
};

export default Aktualnosci;
