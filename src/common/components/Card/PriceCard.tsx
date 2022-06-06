import React from "react";
import ButtonViolet from "../Button/ButtonViolet";
import IPriceCard from "../../../interfaces/IPriceCard";

const PriceCard = ({ logo, price, title, elements, link }: IPriceCard) => {
  const displayImg = () => {
    let images: Array<string> = logo.split("~~");

    return (
      <ul className="logos">
        {images.map((url) => {
          if (images.length <= 1) {
            return <img className="logo-normal" src={url} />
          } else {
            return <img className="logo-pack" src={url} />
          }
        })}
      </ul>
    );
  }

  return (
    <div className="price_card">
      {displayImg()}
      <h3>{price}</h3>
      <h4>{title}</h4>

      <br />
      {elements.length > 1 ?  <p>Contient :</p> : ""}
      <ul>
        {elements.map((element: string, index: number) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>

      <div id="discover_button">
        <ButtonViolet text="Découvrir" link={link} />
      </div>
    </div>
  );
};

export default PriceCard;
