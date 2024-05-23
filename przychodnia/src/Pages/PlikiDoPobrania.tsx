import { gql } from "graphql-request";
import useFetch from "../hook/useFetch";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const PlikiDoPobrania = () => {
  const sss = gql`
    {
      plikiDoPobrania123 {
        id
        opis
        plikiDoPobrania123 {
          url
          id
          fileName
        }
      }
    }
  `;
  const { values } = useFetch(sss);

  console.log(values);
  return (
    <div className="flex justify-center items-center AppEE  ">
      <div className="flex flex-col justify-center items-center w-10/12    px-28 py-10 text-left">
        <h1>Pliki do Pobrania</h1>
        <br></br>
        <ul className="list-disc text-pink-800 justify-center items-center">
          {values &&
            values["plikiDoPobrania123"] &&
            values["plikiDoPobrania123"].map((x: any) => (
              <li key={x.id} className="flex-col">
                <a href={x.plikiDoPobrania123[0].url} download>
                  <div className="flex justify-start items-center ">
                    <h2 className="text-xl">{x.opis}</h2>
                    <div>
                      <FileDownloadIcon
                        fontSize="large"
                        className="text-pink-800"
                        titleAccess={`${x.plikiDoPobrania123[0].fileName}`}
                      />
                    </div>
                  </div>
                </a>
                <br></br>
              </li>
            ))}
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default PlikiDoPobrania;
