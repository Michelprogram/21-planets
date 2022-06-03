import React, { useContext, useState } from "react";
import IFakeData from "../../interfaces/IFakeData";
import { PanierContext } from "../../context/panier";
import addPlanete from "../../utils/calculations";
import IData from "../../interfaces/IData";

const usePanier = () => {
  const [panier, setPanier] = useContext(PanierContext);

  const numberArticles = (): number => {
    return panier.length;
  };

  const isEmpty = (): boolean => {
    return panier.length == 0;
  };

  const addArticles = (article: IData): void => {
    panier.push(article);
    setPanier(panier);
  };

  const removeArticles = (id: number): void => {
    setPanier(panier.filter((el: IData) => el.id != id));
  };

  const totalCost = (): number => {
    if (panier.length < 1) return 0;
    let res = 0;

    panier.forEach((element: IData) => {
      res += element.price;
    });

    return res;
  };

  const totalSuperficie = (): number => {
    if (panier.length < 1) return 0;
    let res = 0;

    panier.forEach((element: IData) => {
      res += element.price;
    });

    return res;
  };

  const totalMasse = (): number => {
    if (panier.length < 1) return 0;

    let res = 0;

    panier.forEach((element: IData) => {
      res += element.price;
    });

    return res;
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
    size: numberArticles,
    superficie: totalSuperficie,
    masse: totalMasse,
    dist: longDist,
    longest: planetLong,
    isEmpty,
    total: totalCost,
    add: addArticles,
    remove: removeArticles,
  };
};

export default usePanier;
