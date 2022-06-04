import { useContext, useState } from "react";
import { DataContext } from "../../context/Data";
import IData from "../../interfaces/IData";

const useData = () => {
  const apiData = useContext(DataContext);

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
    length,
    getById,
    filterByType,
  };
};

export default useData;
