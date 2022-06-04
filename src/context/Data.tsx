import { useState, createContext, useMemo, useEffect } from "react";
import fetchAsteroides from "../api/asteroids";
import fetchComete from "../api/Comete";
import fetchEtoiles from "../api/Etoiles";
import fetchExoplanete from "../api/Exoplanete";
import fetchVaisseaux from "../api/Vaisseaux";
import IData from "../interfaces/IData";

const initData = async (): Promise<any[]> => {
  const exoplanetes = await fetchExoplanete();
  const cometes = await fetchComete();
  const asteroides = await fetchAsteroides();
  const vaisseaux = await fetchVaisseaux();
  const etoiles = await fetchEtoiles();

  const array = [...exoplanetes, ...cometes, ...asteroides, ...vaisseaux, ...etoiles].map(
    (el, index) => {
      el.id = index;
      return el;
    }
  );

  return array;
};

export const DataContext = createContext<any>({});

export const DataProvider = ({ value, children }: any) => {
  const [data, setData] = useState<Array<IData>>(value);

  useEffect(() => {
    initData().then((el: any) => {
      setData(el);
    });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
