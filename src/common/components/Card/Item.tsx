import React from "react";
import { Link } from "react-router-dom";

const Planets = (props: any) => {
  const displayImg = () => {
    if (props.image) {
      let images:Array<string> = props.image.split("~~");
      
      return (
      <ul className="img-container">
        { images.map((url, index) => {
          if(images.length <= 1){
            return <img className="img-card-normal" key={index} src={url}/>
          } else {
            return <img className="img-card-pack" key={index} src={url}/>
          }
        })}
      </ul>
      );
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

  const getColor = () =>{
    return { backgroundColor: props.color };
  } 

  return (
    <div className="container-card-planete">
      <div className="top-side" style={getColor()}>{displayImg()}</div>
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
