import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useCennik = (query: any) => {
  const [data, setData] = useState({}); // Initialize state to null to indicate loading
  const { values } = useFetch(query); // Get loading state from useFetch

  useEffect(() => {
    if (values) {
      // Check if values are available
      const valuesGinekologia = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA GINEKOLOGICZNA"
      );

      const valuesPoz = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA POZ"
      );

      const valuesZabiegowy = values.cennik123.filter(
        (offers: any) => offers.klinika === "GABINET ZABIEGOWY"
      );

      const valuesPoradniaRehabilitacyjna = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA REHABILITACYJNA"
      );
      const valuesRehabilitacja = values.cennik123.filter(
        (offers: any) => offers.klinika === "REHABILITACJA"
      );
      // Update state with filtered data
      setData({
        valuesGinekologia,
        valuesPoz,
        valuesZabiegowy,
        valuesPoradniaRehabilitacyjna,
        valuesRehabilitacja,
      });
    }
  }, [values]); // Re-run only when values change

  return { data }; // Return data and loading state
};

export default useCennik;
