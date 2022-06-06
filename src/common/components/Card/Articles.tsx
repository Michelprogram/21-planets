import { Info, Trash } from "../../../constants/Images";

import usePanier from "../../hooks/panier";

import { ReadablePrice } from "../../../utils/String";
import IData from "../../../interfaces/IData";
import { Link } from "react-router-dom";
import { getColor } from "../../../constants/ColorPalette";
import { useState } from "react";

const Articles = ({ id, name, price, image, type, quantity }: IData) => {
  const { remove, getQuantity } = usePanier();
  const [q, setQ] = useState(quantity);

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

  const removeItem = () => {
    remove(id);
    setQ(getQuantity(id));
  };

  return (
    <div className="container-article" style={getBackgroundColor()}>
      {displayImg()}
      <p className="name">{name}</p>
      <p className="amount">{ReadablePrice(price)} $</p>
      <p>x{q}</p>
      <Link to={"/detail/" + id}>
        <img className="icon-util" src={Info} />
      </Link>
      <img className="icon-util" src={Trash} alt="" onClick={removeItem} />
    </div>
  );
};

export default Articles;
