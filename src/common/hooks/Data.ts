import { useContext, useState } from "react";
import { DataContext } from "../../context/Data";
import IData from "../../interfaces/IData";
import { randomItemFromArray } from "../../utils/Random";

const useData = () => {
  const apiData: Array<IData> = useContext(DataContext);

  const [propositions, setPropositions] = useState<Array<IData>>([]);

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

  const propositionsItem = (quantity:number, type?:string): Array<IData> => {
    if (propositions.length > 0) {
      return propositions;
    }

    let items: Array<IData>;
    if(type){
      items = filterByType(type);
    }else{
      items = apiData;
    }
    const result: Array<IData> = [];

    for (let index = 0; index < quantity; index++) {
      const element = randomItemFromArray(items);
      const indexItems = items.indexOf(element);
      items.splice(indexItems, 1);
      result.push(element);
    }

    setPropositions(result);

    return result;
  };

  return {
    apiData,
    length,
    getById,
    filterByType,
    propositionsItem,
  };
};

export default useData;
