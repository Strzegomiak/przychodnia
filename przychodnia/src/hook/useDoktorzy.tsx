import { useEffect, useState } from "react";
import useFetch from "./useFetch";

interface doktorzyData {
  valuesPoradniaZbydniow: any[];
  valuesPoradniaZaleszany: any[];
  valuesPoradniaTurbia: any[];
  valuesPoradniaStomatologiiZbydniow: any[];
  valuesPoradniaStomatologiiZaleszany: any[];
  valuesPoradniaStomatologiiTurbia: any[];
  valuesPoradniaGinekologicznoPoloznicza: any[];
  valuesPoradniaRehabilitacyjna: any[];
}

const useDoktorzy = (query: any): doktorzyData => {
  const [data, setData] = useState<doktorzyData>({
    valuesPoradniaZbydniow: [],
    valuesPoradniaZaleszany: [],
    valuesPoradniaTurbia: [],
    valuesPoradniaStomatologiiZbydniow: [],
    valuesPoradniaStomatologiiZaleszany: [],
    valuesPoradniaStomatologiiTurbia: [],
    valuesPoradniaGinekologicznoPoloznicza: [],
    valuesPoradniaRehabilitacyjna: [],
  });

  const { values } = useFetch(query);

  useEffect(() => {
    if (values) {
      const poradniaZbydniow = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia POZ w Zbydniowie"
      );

      const poradniaZaleszany = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia POZ w Zaleszanach"
      );

      const poradniaTurbia = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia POZ w Turbi"
      );

      const poradniaStomatologiiZbydniow = values.doktorzyKliniki123.filter(
        (offers: any) =>
          offers.kliniki === "Poradnia stomatologiczna w Zbydniowie"
      );

      const poradniaStomatologiiZaleszany = values.doktorzyKliniki123.filter(
        (offers: any) =>
          offers.kliniki === "Poradnia stomatologiczna w Zaleszanach"
      );

      const poradniaStomatologiiTurbia = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia stomatologiczna w Turbi"
      );

      const poradniaGinekologicznoPoloznicza = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia ginekologiczno-położnicza"
      );

      const poradniaRehabilitacyjna = values.doktorzyKliniki123.filter(
        (offers: any) => offers.kliniki === "Poradnia rehabilitacyjna"
      );

      setData({
        valuesPoradniaZbydniow: poradniaZbydniow,
        valuesPoradniaZaleszany: poradniaZaleszany,
        valuesPoradniaTurbia: poradniaTurbia,
        valuesPoradniaStomatologiiZbydniow: poradniaStomatologiiZbydniow,
        valuesPoradniaStomatologiiZaleszany: poradniaStomatologiiZaleszany,
        valuesPoradniaStomatologiiTurbia: poradniaStomatologiiTurbia,
        valuesPoradniaGinekologicznoPoloznicza:
          poradniaGinekologicznoPoloznicza,
        valuesPoradniaRehabilitacyjna: poradniaRehabilitacyjna,
      });
    }
  }, [values]);

  return data;
};

export default useDoktorzy;
