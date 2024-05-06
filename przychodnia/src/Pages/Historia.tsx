import { GraphQLClient, gql } from "graphql-request";
import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";

const Historia = () => {
  // const provider = new GraphQLClient(
  //   "https://api-eu-west-2.hygraph.com/v2/clvteh58i0npg07usbp0ruz7n/master"
  // );
  // const query = gql`
  //   {
  //     historia123 {
  //       id
  //       opis {
  //         html
  //       }
  //     }
  //   }
  // `;
  // try {
  //   const data: any = await provider.request(query);
  //   console.log(data);
  //   setHistory(data.historia123);
  // } catch (error: any) {
  //   console.log(error.message);
  // }
  const query = gql`
    {
      historia123 {
        id
        opis {
          html
        }
      }
    }
  `;
  const nameAPI = "historia123";
  const { values } = useFetch(query, nameAPI);
  console.log(values);
  return (
    <div className="flex justify-center content-center">
      <h1>Historia</h1>
      {values !== undefined &&
        values.historia123.map((x: any) => {
          const text = x.opis.html.replace(/<\/?p>/g, "");
          return <p key={x.id}>{text}</p>;
        })}
    </div>
  );
};

export default Historia;
