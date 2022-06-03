import React, { useState, createContext, useMemo } from "react";
import articles from "../constants/fakeData";
import IData from "../interfaces/IData";

export const PanierContext = createContext<any>({});

export const PanierProvider = (props: any) => {
  const [panier, setPanier] = useState<Array<IData>>([]);
  const value = useMemo(() => [panier, setPanier], [panier, setPanier]);
  return (
    <PanierContext.Provider value={value}>
      {props.children}
    </PanierContext.Provider>
  );
};
