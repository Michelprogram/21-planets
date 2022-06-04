import Item from "./Card/Item";
import { Waiting } from "../../constants/Images";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";

const Shop = ({ title }: any) => {
  const { apiData, filterByType } = useData();

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
      {filterByType(title).map((el: IData, index: number) => {
        return <Item key={index} name={el.name} image={el.image} id={el.id} />;
      })}
    </div>
  );
};

export default Shop;
