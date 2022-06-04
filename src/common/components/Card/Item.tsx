import React from "react";
import { Link } from "react-router-dom";

const Planets = (props: any) => {
  const displayImg = () => {
    if (props.image) {
      return <img className="img-card" src={props.image} alt="" />;
    }
    return (
      <div>
        {props.forme ? (
          <div className="square"></div>
        ) : (
          <div className="round"></div>
        )}
      </div>
    );
  };

  return (
    <div className="container-card-planete">
      <div className="top-side">{displayImg()}</div>
      <div className="description">
        <div>
          <p className="title">{props.name}</p>
          <Link to={"/detail/" + props.id}>
            <p>Voir plus &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planets;
