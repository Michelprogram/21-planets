import React, { useState, createContext, useMemo, useEffect } from "react";
import fetchComete from "../api/Comete";
import fetchExoplanete from "../api/Exoplanete";
import IComete from "../interfaces/IComete";
import IExoplanete from "../interfaces/IExoplanete";

export const DataContext = createContext<any>({});

const fetchAllData = async (): Promise<any[]> => {
  const exoplanetes = await fetchExoplanete();
  const cometes = await fetchComete();

  const array = [...exoplanetes, ...cometes].map((el, index) => {
    el.id = index;
    return el;
  });

  return array;
};

export const DataProvider = (props: any) => {
  const [data, setData] = useState<Array<IExoplanete>>([]);

  const setDataApi = () => {
    fetchAllData().then((el) => setData(el));
  };
  useEffect(() => {
    setDataApi();
  }, []);

  const value_1 = useMemo(() => [data, setData], [data, setData]);
  return (
    <DataContext.Provider value={value_1}>
      {props.children}
    </DataContext.Provider>
  );
};
