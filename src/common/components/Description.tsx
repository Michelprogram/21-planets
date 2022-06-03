import { useState } from "react";
import { Link } from "react-router-dom";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import usePanier from "../hooks/panier";
import ButtonBlue from "./Button/ButtonBlue";

const Description = ({ data, className }: IDescription) => {
  const [buttonText, setButtonText] = useState("Ajouter au panier");
  const { add, size } = usePanier();

  console.log(data);

  return (
    <div className={"description-container" + className}>
      <img src={data.image} className="icon" />

      <div className="description">
        <h1>{data.description}</h1>

        <div className="description-detaillee">
          <ul>
            <li>
              Nom : <p>{data.name}</p>
            </li>
            <li>
              Size : <p>{data.size}</p>
            </li>
            <li>
              Distance de la Terre : <p>{data.distance_from_earth}</p> km{" "}
            </li>
          </ul>
        </div>

        <div className="achat">
          <p className="prix">{data.price} $</p>
          <Link to="" onClick={() => add(data)}>
            <button type="button" className="button_blue">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
