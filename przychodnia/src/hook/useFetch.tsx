import { GraphQLClient, gql } from "graphql-request";
import { useEffect, useState } from "react";

const useFetch = (query: any, nameAPI: any) => {
  const [values, setValues] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const provider = new GraphQLClient(
        "https://api-eu-west-2.hygraph.com/v2/clvteh58i0npg07usbp0ruz7n/master"
      );

      try {
        const data: any = await provider.request(query);
        console.log(data);
        setValues(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [query, nameAPI]);

  return { values };
};

export default useFetch;
