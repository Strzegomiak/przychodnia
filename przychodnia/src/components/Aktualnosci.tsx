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
    zdjeciaDomyslne123 {
      zdjecie {
        url
        id
      }
    }
  }
`;
// [1,2,3] jak dodajemy nowe [1,2,3,4] wiec zawsze 4 ostatnie ma brać z czego ostatnie to MAIN
const Aktualnosci = () => {
  const { values } = useFetch(aktualnosciQuery);
  let reverseValues;
  let defaultPicture;
  if (values && values["aktualnosci123"]) {
    reverseValues = [...values["aktualnosci123"]].reverse();
    defaultPicture = values.zdjeciaDomyslne123;
  }
  console.log(defaultPicture);
  return (
    <div className="flex justify-center content-center AppDD w-full bg-red-300">
      <div className="flex w-10/12  items-center bg-red-500">
        {reverseValues && reverseValues[0] ? (
          <AktualnosciModul
            news={reverseValues[0]}
            defaultPicture={defaultPicture}
          />
        ) : null}
      </div>
      <div className="flex-col w-10/12  items-center bg-red-500">
        {reverseValues && reverseValues[1] ? (
          <AktualnosciModul
            news={reverseValues[1]}
            defaultPicture={defaultPicture}
          />
        ) : null}
        {reverseValues && reverseValues[2] ? (
          <AktualnosciModul
            news={reverseValues[2]}
            defaultPicture={defaultPicture}
          />
        ) : null}
        {reverseValues && reverseValues[3] ? (
          <AktualnosciModul
            news={reverseValues[3]}
            defaultPicture={defaultPicture}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Aktualnosci;
