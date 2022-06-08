import { useState, createContext, useMemo, useEffect } from "react";
import fetchAsteroides from "../api/asteroids";
import fetchComete from "../api/Comete";
import fetchEtoiles from "../api/Etoiles";
import fetchExoplanete from "../api/Exoplanete";
import fetchVaisseaux from "../api/Vaisseaux";
import IData from "../interfaces/IData";
import { random } from "../utils/Random";

const initData = async (): Promise<any[]> => {
  const exoplanetes = await fetchExoplanete();
  const cometes = await fetchComete();
  const asteroides = await fetchAsteroides();
  const vaisseaux = await fetchVaisseaux();
  const etoiles = await fetchEtoiles();

  const array = [
    ...exoplanetes,
    ...cometes,
    ...asteroides,
    ...vaisseaux,
    ...etoiles,
  ].map((el, index) => {
    el.id = index;
    return el;
  });

  createPacks(array);

  return array;
};

const createPacks = (array: Array<IData>) => {
  const articlesParPack = 3;
  const nbPacks = 20;

  let randomIndexes: Array<number> = [];
  let randomIndex: number;
  let totalArticles = array.length;
  let pack: IData;

  //choix des articles
  for (let i = 0; i < nbPacks; i++) {
    //initialisation du pack
    pack = {
      id: 0,
      size: 0,
      name: "",
      description: "Le pack interstellaire : ",
      price: 0,
      image: "",
      distance_from_earth: 0,
      type: "packs",
    };

    //remplissage du pack
    for (let j = 0; j < articlesParPack; j++) {
      do {
        randomIndex = random(0, totalArticles);
      } while (randomIndexes.includes(randomIndex));

      //récupération d'un article
      randomIndexes.push(randomIndex);
      let randomArticle = array[randomIndex];

      //ajout de l'article dans le pack
      pack.price += randomArticle.price;
      pack.size += randomArticle.size ? randomArticle.size : 30;
      pack.name += randomArticle.name;
      pack.image += randomArticle.image;
      pack.description += randomArticle.type.slice(0, -1);

      if (randomArticle.distance_from_earth > pack.distance_from_earth) {
        pack.distance_from_earth += randomArticle.distance_from_earth;
      }

      if (j !== articlesParPack - 1) {
        pack.name += " & ";
        pack.description += " + ";
        pack.image += "~~";
      }
    }

    pack.id = totalArticles + i;
    array.push(pack);
  }

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
