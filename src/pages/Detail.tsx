import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useData from "../common/hooks/Data";
import usePanier from "../common/hooks/panier";
import IData from "../interfaces/IData";
import ITitle from "../interfaces/ITitle";
import { ReadablePrice } from "../utils/String";
import { Navigate } from "react-router-dom";

const Detail = () => {
  const [buttonText, setButtonText] = useState("Ajouter au panier");
  const [id, setId] = useState<number>(parseInt(useParams().productId!));

  const [item, setItem] = useState<IData>({
    id: 0,
    size: 0,
    name: "",
    description: "",
    price: 0,
    image: "",
    distance_from_earth: 0,
    type: "",
  });

  const { add, size } = usePanier();
  const { getById } = useData();

  const getBackgroundColor = (type: string) => {
    const categories: Array<ITitle> = [
      { title: "asteroides", color: "#713cf7" },
      { title: "exoplanetes", color: "#49fa95" },
      { title: "vaisseaux", color: "#50bec2" },
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

  useEffect(() => {
    const item: IData = getById(id);

    /*    if (item == undefined) {
      <Navigate to={"*"} />;
    } */

    setItem(item);
  }, []);

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
