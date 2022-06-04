import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useData from "../common/hooks/Data";
import usePanier from "../common/hooks/panier";
import IData from "../interfaces/IData";
import ITitle from "../interfaces/ITitle";
import { ReadablePrice } from "../utils/String";

const Detail = () => {
  const [buttonText, setButtonText] = useState("Ajouter au panier");
  const { add, size } = usePanier();

  const { getById } = useData();

  const id: number = parseInt(useParams().productId!);

  const item: IData = getById(id);

  const getBackgroundColor = (type: string) => {
    const categories: Array<ITitle> = [
      { title: "asteroides", color: "#713cf7" },
      { title: "exoplanetes", color: "#49fa95" },
      { title: "sattelites", color: "#50bec2" },
      { title: "packs", color: "#d6748a" },
      { title: "cometes", color: "#adbdbb" },
      { title: "etoiles", color: "#1d2a47" },
    ];

    const res = categories.find((el) => el.title == type);

    return {
      backgroundColor: res?.color,
    };
  };

  const clickAddCart = () => {
    add(item);
    setButtonText("Article ajouté !");
  };

  return (
    <div className="description-container shop-description">
      <div className="img-container" style={getBackgroundColor(item.type)}>
        <img src={item.image} className="img" />
      </div>

      <div className="description">
        <p>{item.description}</p>

        <div className="description-detaillee">
          <ul>
            <li>
              Nom : <p>{item.name}</p>
            </li>
            <li>
              Size : <p>{ReadablePrice(item.size)} km</p>
            </li>
            <li>
              Distance de la Terre :{" "}
              <p>{ReadablePrice(item.distance_from_earth)} km</p>
            </li>
          </ul>
        </div>

        <div className="achat">
          <p className="prix">{ReadablePrice(item.price)} $</p>
          <Link to="" onClick={clickAddCart}>
            <button type="button" className="button_blue">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
