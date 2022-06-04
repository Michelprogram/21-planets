import React, { useEffect, useState } from "react";
import Planets from "./Card/Item";
import setClassName from "../../utils/ClassName";
import fetchAsteroides from "../../api/asteroids";
import IAsteroid from "../../interfaces/IAsteroide";
import AsteroideCard from "./Card/AsteroideCard";
import { random } from "../../utils/Random";

const Propositions = ({ className = "" }) => {
  const [data, setData] = useState<Array<IAsteroid>>([]);

  useEffect(() => {
    fetchAsteroides().then((asteroides: Array<IAsteroid>) =>
      setData(asteroides)
    );
  }, []);

  return (
    <div className={setClassName("container-propositions", className)}>
      <p className="title">Nos meilleur propositions ...</p>
      <p className="quote">
        “Le temps et l'espace ne sont pas des conditions d'existence, le temps
        et l'espace sont un modèle de réflexion.” - Gaspard
      </p>
      <div className="best-propositions">
        {/*        {data.slice(0, 4).map((el: any, index: number) => (
          <AsteroideCard key={index} id={index + ""} asteroide={el.asteroide} />
        ))} */}
      </div>
    </div>
  );
};

export default Propositions;
