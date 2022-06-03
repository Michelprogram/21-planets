import React, { useEffect, useState } from "react";

import fetchExoplanete from "../../api/Exoplanete";
import IExoplanete from "../../interfaces/IExoplanete";
import Planets from "../../common/components/Card/Planets";
import fetchComete from "../../api/Comete";
import { Waiting } from "../../constants/Images";

const Shop = ({ title }: any) => {
  const [data, setData] = useState<Array<any>>([]);

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

  const whichCard = (): Array<JSX.Element> => {
    let res: Array<JSX.Element> = [];

    switch (title) {
      case "exoplanetes":
        res = data.map((el, index) => (
          <Planets key={index} name={el.display_name} image={el.image} />
        ));
        break;
      case "cometes":
        res = data.map((el, index) => (
          <Planets key={index} name={el.name} image={el.image} />
        ));
        break;
      default:
        setData([]);
        break;
    }

    return res;
  };

  const whichData = () => {
    switch (title) {
      case "exoplanetes":
        fetchExoplanete().then((el) => setData(el));
        break;
      case "cometes":
        fetchComete().then((el) => setData(el));
        break;
      default:
        setData([]);
        break;
    }
    return 0;
  };

  useEffect(() => {
    whichData();
  }, []);

  return (
    <div className="container-shop-items">
      {data.length == 0 ? waitingFetch() : whichCard()}
    </div>
  );
};

export default Shop;
