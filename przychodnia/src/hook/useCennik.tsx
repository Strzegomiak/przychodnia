import { useEffect, useState } from "react";
import useFetch from "./useFetch";

interface CennikData {
  valuesGinekologia: any[];
  valuesPoz: any[];
  valuesZabiegowy: any[];
  valuesPoradniaRehabilitacyjna: any[];
  valuesRehabilitacja: any[];
}

const useCennik = (query: any): CennikData => {
  const [data, setData] = useState<CennikData>({
    valuesGinekologia: [],
    valuesPoz: [],
    valuesZabiegowy: [],
    valuesPoradniaRehabilitacyjna: [],
    valuesRehabilitacja: [],
  });

  const { values } = useFetch(query);

  useEffect(() => {
    if (values) {
      const ginekologia = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA GINEKOLOGICZNA"
      );

      const poz = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA POZ"
      );

      const zabiegowy = values.cennik123.filter(
        (offers: any) => offers.klinika === "GABINET ZABIEGOWY"
      );

      const poradniaRehabilitacyjna = values.cennik123.filter(
        (offers: any) => offers.klinika === "PORADNIA REHABILITACYJNA"
      );

      const rehabilitacja = values.cennik123.filter(
        (offers: any) => offers.klinika === "REHABILITACJA"
      );

      setData({
        valuesGinekologia: ginekologia,
        valuesPoz: poz,
        valuesZabiegowy: zabiegowy,
        valuesPoradniaRehabilitacyjna: poradniaRehabilitacyjna,
        valuesRehabilitacja: rehabilitacja,
      });
    }
  }, [values]);

  return data;
};

export default useCennik;
