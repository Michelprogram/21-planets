import { useContext, useState } from "react";
import { PanierContext } from "../../context/panier";
import IData from "../../interfaces/IData";
import sumFields from "../../utils/calculations";

const usePanier = () => {
  const [panier, setPanier] = useContext(PanierContext);

  const numberArticles = (): number => {
    return panier.length;
  };

  const isEmpty = (): boolean => {
    return panier.length == 0;
  };

  const addArticles = (article: IData): void => {
    const elementsId: Array<number> = panier.map((el: IData) => el.id);
    const index = elementsId.indexOf(article.id);
    if (index != -1) {
      panier[index].quantity++;
      setPanier([...panier]);
    } else {
      article.quantity = 1;
      panier.push(article);
    }
  };

  const duplicate = (id: number): void => {
    const elementsId: Array<number> = panier.map((el: IData) => el.id);
    const index = elementsId.indexOf(id);

    panier[index].quantity++;
    setPanier([...panier]);
  };

  const removeArticles = (id: number): void => {
    const elementsId: Array<number> = panier.map((el: IData) => el.id);
    const index: number = elementsId.indexOf(id);

    if (panier[index].quantity > 1) {
      panier[index].quantity--;
      setPanier([...panier]);
    } else {
      setPanier(panier.filter((el: IData) => el.id != id));
    }
  };

  const getQuantity = (id: number): number => {
    const elementsId: Array<number> = panier.map((el: IData) => el.id);
    const index = elementsId.indexOf(id);

    return panier[index].quantity;
  };

  const totalCost = (): number => {
    let total: number = 0.0;

    if (panier.length == 0) return total;

    for (let index = 0; index < panier.length; index++) {
      const element: IData = panier[index];

      let tempo = 0;

      if ((element.quantity as number) > 1) {
        tempo = element.price * (element.quantity as number);
      } else {
        tempo = element.price;
      }

      total += tempo;
    }

    return total;
  };

  const totalSize = (): number => {
    if (panier.length < 1) return 0;

    return sumFields<IData>(panier, "size");
  };

  const longDist = (): number => {
    if (panier.length < 1) return 0;

    return Math.max(...panier.map((o: IData) => o.distance_from_earth));
  };

  const planetLong = (): IData => {
    return panier.filter(
      (el: IData) => el.distance_from_earth == longDist()
    )[0];
  };

  return {
    panier: panier,
    setPanier,
    duplicate,
    size: numberArticles,
    superficie: totalSize,
    dist: longDist,
    longest: planetLong,
    isEmpty,
    total: totalCost,
    add: addArticles,
    remove: removeArticles,
    getQuantity,
  };
};

export default usePanier;
