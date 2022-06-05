import Item from "./Card/Item";
import { Waiting } from "../../constants/Images";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";
import {getColor} from "../../constants/ColorPalette";
import { useEffect } from "react";

const Shop = ({ title }: any) => {
  const { apiData, filterByType, createPacks } = useData();

  useEffect(()=>{
    if(apiData != undefined){
      createPacks();
    }
  });

  if (!apiData) {
    return (
      <div className="container-shop-items">
        {" "}
        <div className="waiting-container">
          <img src={Waiting} alt="" />
          <p>
            Patientez pendant que nous cherchons vos données à travers le cosmos
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-shop-items">
      { title === "packs" ? 

      createPacks().map((el: IData, index: number) => {
        return <Item key={index} name={el.name} image={el.image} color={getColor(title)} id={el.id} />;
      })
      
      :

      filterByType(title).map((el: IData, index: number) => {
        return <Item key={index} name={el.name} image={el.image} color={getColor(title)} id={el.id} />;
      })
      
      }
    </div>
  );
};

export default Shop;
