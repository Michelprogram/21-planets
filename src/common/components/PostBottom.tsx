import React from "react";
import setClassName from "../../utils/ClassName";

import {
  Planete1 as Planet,
  VoieLactee2 as Space,
} from "../../constants/Images";
import { Link } from "react-router-dom";

const PostBottom = ({ className = "" }) => {
  return (
    <div className={setClassName("container-post-bottom", className)}>
      <div className="container-vitrine">
        <div className="container-gazeuse">
          <img src={Planet} className="background-planet" />
          <p className="blue-text">Planète gazeuse</p>
        </div>
        <div className="container-etoiles">
          <img src={Space} className="background-planet" />
          <p className="blue-text">Etoiles</p>
          <p className="blue-text">
            Les étoiles parmi les étoiles ne donnent que peu de lumière et pas
            davantage de chaleur.
          </p>
        </div>
        <div className="container-asteroides">
          <p>Astéroïdes</p>
          <p>Trouvez les astéroïdes les plus convoitées de la galaxie.</p>
          <Link to="/categories/asteroides">
            <p>Allez voir &gt;</p>
          </Link>
        </div>
        <div className="container-debris">
          <p>Débris</p>
          <p>Passionnez de vaisseau spatial n’attendez plus !</p>
          <Link to="/categories/vaisseaux">
            <p>Allez voir &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostBottom;
