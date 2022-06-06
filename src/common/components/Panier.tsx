import ButtonViolet from "./Button/ButtonViolet";
import Articles from "./Card/Articles";

import { MasterPlan as Plan } from "../../constants/Images";

import setClassName from "../../utils/ClassName";
import usePanier from "../hooks/panier";
import { ReadablePrice } from "../../utils/String";
import IData from "../../interfaces/IData";

const Panier = ({ className = "" }) => {
  const { panier, total, size, superficie, dist, longest } = usePanier();

  const heightValue = () => {
    return { height: 100 * size() + "px" };
  };

  const displayCart = () => {
    if (size() == 0) {
      return (
        <div className="container-articles-empty">
          <img src={Plan} alt="" className="empty-cart" />
        </div>
      );
    }
    return (
      <div className="container-articles" style={heightValue()}>
        {panier.map((data: IData, index: number) => (
          <Articles key={index} {...data} />
        ))}
      </div>
    );
  };

  return (
    <div className={setClassName("container-panier", className)}>
      <div className="container-grid">
        <div className="price-list">{displayCart()}</div>
        <div className="total">
          <div className="container-inside">
            <p>Résumé de votre panier</p>
            <p>{ReadablePrice(total())} $ </p>
            <ButtonViolet
              link="/"
              text="Acheter"
              className="button-panier-acheter"
            />
          </div>
        </div>
        <div className="statistics">
          <div className="container-inside">
            <p className="title">Statistique</p>
            <p className="superficie">
              Taille totale : <span>{ReadablePrice(superficie())} km3</span>
            </p>
            <p className="far">
              Planete la plus loin :{" "}
              <span>{size() > 0 ? longest().name : ""}</span>
            </p>
            <p className="dist">
              Distance la plus loin : <span>{ReadablePrice(dist())} km</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
