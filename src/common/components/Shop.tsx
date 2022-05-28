import React, { useEffect, useState } from "react";

import fetchExoplanete from "../../api/Exoplanete";
import IExoplanete from "../../interfaces/IExoplanete";
import Planets from "../../common/components/Card/Planets";

const Shop = ({ title }: any) => {
  const [data, setData] = useState<Array<IExoplanete>>([]);

  const whichData = () => {
    switch (title) {
      case "exoplanetes":
        fetchExoplanete().then((el) => setData(el));
        break;
      default:
        setData([]);
        break;
    }
  };

  useEffect(() => {
    whichData();
  });

  return (
    <div className="container-shop-items">
      {data.map((el, index) => {
        return <Planets key={index} name={el.display_name} image={el.image} />;
      })}
    </div>
  );
};

export default Shop;
