import React, { useContext, useState } from "react";
import IFakeData from "../../interfaces/IFakeData";
import { PanierContext } from "../../context/panier";

const usePanier = () => {
  const [panier, setPanier] = useContext(PanierContext);

  const numberArticles = (): number => {
    return panier.length;
  };

  const isEmpty = (): boolean => {
    return panier.length == 0;
  };

  const addArticles = (article: IFakeData): void => {
    panier.push(article);
    setPanier(panier);
  };

  const removeArticles = (id: number): void => {
    setPanier(panier.filter((el) => el.id != id));
  };

  const total = (): number => {
    let total: number = 0;
    panier.forEach((el) => (total += el.amount));
    return total;
  };

  return {
    panier: panier,
    setPanier,
    size: numberArticles,
    isEmpty,
    total,
    add: addArticles,
    remove: removeArticles,
  };
};

export default usePanier;
