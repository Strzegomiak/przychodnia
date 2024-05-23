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

  return (
    <div className="AppDD flex justify-center content-center items-center bg-red-300 w-full">
      <div className=" flex-col w-9/12 justify-center content-center items-center  py-5">
        <h1 className="text-center py-5 Podkreslenie">Aktualności</h1>
        <div className=" flex justify-center content-center   gap-5">
          <div className="flex-col items-start content-start">
            {reverseValues && reverseValues[0] ? (
              <AktualnosciModul
                news={reverseValues[0]}
                defaultPicture={defaultPicture[0]}
                size={"big"}
              />
            ) : null}
          </div>
          <div className="flex-col items-center">
            {reverseValues && reverseValues[1] ? (
              <div className="border-b-2 border-solid border-green-700 ">
                <AktualnosciModul
                  news={reverseValues[1]}
                  defaultPicture={defaultPicture[1]}
                  size={"small"}
                />{" "}
              </div>
            ) : null}
            {reverseValues && reverseValues[2] ? (
              <div className="border-b-2 border-solid border-green-700 ">
                <AktualnosciModul
                  news={reverseValues[2]}
                  defaultPicture={defaultPicture[2]}
                  size={"small"}
                />
              </div>
            ) : null}
            {reverseValues && reverseValues[3] ? (
              <AktualnosciModul
                news={reverseValues[3]}
                defaultPicture={defaultPicture[3]}
                size={"small"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktualnosci;
