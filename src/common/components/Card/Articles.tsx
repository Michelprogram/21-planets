import { Info, Trash } from "../../../constants/Images";

import usePanier from "../../hooks/panier";

import { ReadablePrice } from "../../../utils/String";
import IData from "../../../interfaces/IData";
import { Link } from "react-router-dom";
import { getColor } from "../../../constants/ColorPalette";

const Articles = ({ id, name, price, image, type }: IData) => {
  const { remove } = usePanier();

  const displayImg = () => {
    let images: Array<string> = image.split("~~");

    return (
      <ul className="icons">
        {images.map((url) => {
          if (images.length <= 1) {
            return <img className="icon" src={url} />
          } else {
            return <img className="icon-pack" src={url} />
          }
        })}
      </ul>
    );
  }

  const getBackgroundColor = () => {
    return { backgroundColor: getColor(type) };
  }

  return (
    <div className="container-article" style={getBackgroundColor()}>
      {displayImg()}
      <p className="name">{name}</p>
      <p className="amount">{ReadablePrice(price)} $</p>
      <Link to={"/detail/" + id}>
        <img className="icon-util" src={Info} />
      </Link>
      <img
        className="icon-util"
        src={Trash}
        alt=""
        onClick={() => remove(id)}
      />
    </div>
  );
};

export default Articles;
