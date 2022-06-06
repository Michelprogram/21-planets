import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useData from "../common/hooks/Data";
import usePanier from "../common/hooks/panier";
import IData from "../interfaces/IData";
import { ReadablePrice } from "../utils/String";
import { getColor } from "../constants/ColorPalette";

const Detail = () => {
  const [buttonText, setButtonText] = useState("Ajouter au panier");
  const [id, setId] = useState<number>(parseInt(useParams().productId!));

  const [color, setColor] = useState<string>("");

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

  const { add } = usePanier();
  const { apiData, getById } = useData();

  const clickAddCart = () => {
    add(item);
    setButtonText("Article ajouté !");
  };

  const getBackgroundColor = () => {
    return { backgroundColor: color };
  };

  useEffect(() => {
    const item: IData = getById(id);
    console.log("Get by id", item);
    console.log("Id", id);
    console.log(apiData);
    setItem(item);
    console.log(item);
    setColor(getColor(item.type));
  }, []);

  const displayImg = () => {
    let images: Array<string> = item.image.split("~~");

    return (
      <ul>

        { images.map((url,index) => {
          if(images.length <= 1){
            return <img className="img" key={index} src={url}/>
          } else {
            return <img className="img-detail-pack" key={index} src={url}/>

          }
        })}
      </ul>
    );
  };

  return (
    <div className="description-container shop-description">
      <div className="img-container" style={getBackgroundColor()}>
        {displayImg()}
      </div>

      <div className="description">
        <p>{item.description}</p>

        <div className="description-detaillee">
          <ul>
            <li>
              Nom : <p>{item.name}</p>
            </li>
            <li>
              Taille : <p>{ReadablePrice(item.size)} km</p>
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
