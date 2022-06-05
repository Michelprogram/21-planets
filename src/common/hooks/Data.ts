import { useContext, useState } from "react";
import { categories } from "../../constants/ColorPalette";
import { DataContext } from "../../context/Data";
import IData from "../../interfaces/IData";
import { random } from "../../utils/Random";

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

  const createPacks = (): Array<IData> => {
    const articlesParPack = 3;
    const nbPacks = 20;

    let randomIndexes: Array<number> = [];
    let randomIndex: number;
    let totalArticles = apiData.length;
    let randomArticles: Array<IData> = [];
    let pack:IData;

    //choix des articles
    for (let i = 0; i < nbPacks; i++) {

      //initialisation du pack
      pack = {
        id: 0,
        size: 0,
        name: "",
        description: "",
        price: 0,
        image: "",
        distance_from_earth: 0,
        type: "packs"
      }

      //remplissage du pack
      for (let j = 0; j < articlesParPack; j++) {
        do {
          randomIndex = random(0, totalArticles);
        } while (randomIndexes.includes(randomIndex))

        //récupération d'un article
        randomIndexes.push(randomIndex);
        let randomArticle = apiData[randomIndex];

        //ajout de l'article dans le pack
        pack.id = totalArticles+i;
        pack.price += randomArticle.price;
        pack.size += randomArticle.size;
        pack.name += randomArticle.name;
        pack.image += randomArticle.image;
        if (j !== 2) {
          pack.name += " & "
          pack.image += "~~"
        }
      }
 
      randomArticles.push(pack);
    }

    return randomArticles;
  };

  return {
    apiData,
    length,
    getById,
    filterByType,
    createPacks
  };
};

export default useData;
