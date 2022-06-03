import React, { useEffect, useState } from "react";

import Planets from "../../common/components/Card/Planets";
import { Waiting } from "../../constants/Images";
import useData from "../hooks/Data";
import IData from "../../interfaces/IData";

const Shop = ({ title }: any) => {
  const { length, filterByType } = useData();

  const [data, setData] = useState<Array<IData>>([]);

  const waitingFetch = (): JSX.Element => {
    return (
      <div className="waiting-container">
        <img src={Waiting} alt="" />
        <p>
          Patientez pendant que nous cherchons vos données à travers le cosmos
        </p>
      </div>
    );
  };

  useEffect(() => {
    setData(filterByType(title));
  }, []);

  return (
    <div className="container-shop-items">
      {length() == 0
        ? waitingFetch()
        : data.map((el, index) => {
            return (
              <Planets key={index} name={el.name} image={el.image} id={el.id} />
            );
          })}
    </div>
  );
};

export default Shop;
