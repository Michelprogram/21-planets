import React, { useState } from "react";
import IFakeData from "../../../interfaces/IFakeData";

import { svgIcones as PlanetsSVG, Trash } from "../../../constants/Images";
import { random } from "../../../utils/Random";

import usePanier from "../../hooks/panier";

import { ReadablePrice } from "../../../utils/String";

const Articles = ({ id, planete }: IFakeData) => {
  const [icons, _] = useState<Array<string>>(PlanetsSVG);

  const { remove } = usePanier();

  const randomIcon = (): string => {
    return icons[random(0, icons.length)];
  };

  return (
    <div className="container-article">
      <img src={randomIcon()} alt="" className="icon" />
      <p className="name">{planete.name}</p>
      <p className="amount">{ReadablePrice(planete.amount)} $</p>
      <img className="trash" src={Trash} alt="" onClick={() => remove(id)} />
    </div>
  );
};

export default Articles;
