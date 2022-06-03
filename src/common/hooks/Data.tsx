import React, { useContext, useState } from "react";
import IFakeData from "../../interfaces/IFakeData";
import { PanierContext } from "../../context/panier";
import addPlanete from "../../utils/calculations";
import { DataContext } from "../../context/Data";
import IData from "../../interfaces/IData";

const useData = () => {
  const [apiData, setApiData] = useContext(DataContext);

  const length = (): number => {
    return apiData.length;
  };

  const getById = (id: number): any => {
    for (let index = 0; index < apiData.length; index++) {
      const element = apiData[index];
      if (element.id == id) {
        return element;
      }
    }
  };

  const filterByType = (type: string): Array<IData> => {
    return apiData.filter((el: IData) => el.type == type);
  };

  return {
    apiData,
    setApiData,
    length,
    getById,
    filterByType,
  };
};

export default useData;
