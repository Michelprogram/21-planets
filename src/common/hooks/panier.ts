import React, { useContext, useState } from "react";
import IFakeData from "../../interfaces/IFakeData";
import { PanierContext } from "../../context/panier";
import addPlanete from "../../utils/calculations";

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
    setPanier(panier.filter((el: IFakeData) => el.id != id));
  };

  const totalCost = (): number => {
    return addPlanete<IFakeData>(panier, "amount");
  };

  const totalSuperficie = (): number => {
    return addPlanete<IFakeData>(panier, "superficie");
  };

  const totalMasse = (): number => {
    return addPlanete<IFakeData>(panier, "masse");
  };

  const longDist = (): number => {
    return Math.max(
      ...panier.map((o: IFakeData) => o.planete.distanceFromEarth)
    );
  };

  const planetLong = (): IFakeData => {
    return panier.filter(
      (el: IFakeData) => el.planete.distanceFromEarth == longDist()
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
