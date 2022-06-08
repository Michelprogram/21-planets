import Item from "./Card/Item";
import Waiting from "./Waiting";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";
import { getColor } from "../../constants/ColorPalette";
import { useState } from "react";
import ITitle from "../../interfaces/ITitle";

const Shop = ({ title, icons, color }: ITitle) => {
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

  const styleInput = () => {
    return {
      borderColor: color,
      color: color,
    };
  };

  if (!apiData) {
    return <Waiting />;
  }

  return (
    <div className="container-shop">
      <div className="container-input">
        <input
          type="text"
          className="search-bar"
          placeholder={"Search for " + title}
          onChange={inputHandler}
          style={styleInput()}
        />
        <div style={{ backgroundColor: color }}>
          <img src={icons} alt="" />
        </div>
      </div>

      <div className="container-shop-items">{filterData()}</div>
    </div>
  );
};

export default Shop;
