import Item from "./Card/Item";
import { Waiting } from "../../constants/Images";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";
import { getColor } from "../../constants/ColorPalette";
import { useState } from "react";

const Shop = ({ title }: any) => {
  const { apiData, filterByType } = useData();
  const [search, setSearch] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const filterData = () => {
    return filterByType(title)
      .filter((el: IData) => {
        if (search == "") return el;
        return el.name.toLowerCase().includes(search);
      })
      .map((el: IData, index: number) => {
        return (
          <Item
            key={index}
            name={el.name}
            image={el.image}
            color={getColor(title)}
            id={el.id}
          />
        );
      });
  };

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
    <div>
      <input type="text" onChange={inputHandler} />
      <div className="container-shop-items">{filterData()}</div>
    </div>
  );
};

export default Shop;
