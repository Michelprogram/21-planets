import React from "react";
import IPlanete from "../../../interfaces/IPlanete";
import { Link } from "react-router-dom";
import { useUpdateSelectedItem } from '../../../context/SelectedItemContext';

const Planets = ({ name, forme, image }: IPlanete) => {
  const updateSelectedItem = useUpdateSelectedItem();
    function update(){
        updateSelectedItem(name);
    }

  const displayImg = () => {
    if (image) {
      return <img className="img-card" src={image} alt="" />;
    }
    return (
      <div>
        {forme ? <div className="square"></div> : <div className="round"></div>}
      </div>
    );
  };

  return (
    <div className="container-card-planete">
      <div className="top-side">{displayImg()}</div>
      <div className="description">
        <div>
          <p className="title">{name}</p>
          <Link to="/detail" onClick={() => update()}>
            <p>Voir plus &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planets;
