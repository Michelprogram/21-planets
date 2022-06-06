import setClassName from "../../utils/ClassName";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";
import Item from "./Card/Item";
import { getColor } from "../../constants/ColorPalette";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Propositions = ({ className = "" }) => {
  let navigate = useNavigate();

  const { apiData, propositionsItem } = useData();

  if (!apiData) {
    navigate("/");
    return <div></div>;
  }

  return (
    <div className={setClassName("container-propositions", className)}>
      <p className="title">Nos meilleur propositions ...</p>
      <p className="quote">
        “Le temps et l'espace ne sont pas des conditions d'existence, le temps
        et l'espace sont un modèle de réflexion.” - Gaspard
      </p>
      <div className="best-propositions">
        {propositionsItem(4).map((el: IData, index: number) => {
          return (
            <Item
              key={index}
              name={el.name}
              image={el.image}
              color={getColor(el.type)}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Propositions;
