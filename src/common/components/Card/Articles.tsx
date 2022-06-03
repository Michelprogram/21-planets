import { Info, Trash } from "../../../constants/Images";

import usePanier from "../../hooks/panier";

import { ReadablePrice } from "../../../utils/String";
import IData from "../../../interfaces/IData";
import { Link } from "react-router-dom";

const Articles = ({ id, name, price, image }: IData) => {
  const { remove } = usePanier();

  return (
    <div className="container-article">
      <img src={image} alt="" className="icon" />
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
