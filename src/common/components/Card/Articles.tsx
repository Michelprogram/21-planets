import { Info, Plus, Trash } from "../../../constants/Images";

import usePanier from "../../hooks/panier";

import { ReadablePrice } from "../../../utils/String";
import IData from "../../../interfaces/IData";
import { Link } from "react-router-dom";
import { getColor } from "../../../constants/ColorPalette";
import { useState } from "react";

const Articles = ({ id, name, price, image, type }: IData) => {
  const { remove, getQuantity, duplicate } = usePanier();

  const displayImg = () => {
    let images: Array<string> = image.split("~~");

    return (
      <ul className="icons">
        {images.map((url) => {
          if (images.length <= 1) {
            return <img className="icon" src={url} />;
          } else {
            return <img className="icon-pack" src={url} />;
          }
        })}
      </ul>
    );
  };

  const getBackgroundColor = () => {
    return { backgroundColor: getColor(type) };
  };

  const displayName = (): string => {
    if (name.length > 10) {
      return name.slice(0, 10) + " ...";
    }
    return name;
  };

  return (
    <div className="container-article" style={getBackgroundColor()}>
      {displayImg()}
      <p className="name" title={name}>
        {displayName()}
      </p>
      <p className="amount">{ReadablePrice(price)} $</p>
      <p>x{getQuantity(id)}</p>
      <Link to={"/detail/" + id}>
        <img className="icon-util" src={Info} />
      </Link>
      <img className="icon-util" src={Trash} onClick={() => remove(id)} />
      <img className="icon-util" src={Plus} onClick={() => duplicate(id)} />
    </div>
  );
};

export default Articles;
