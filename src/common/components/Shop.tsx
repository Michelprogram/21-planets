import React, { useEffect, useState } from "react";

import fetchExoplanete from "../../api/Exoplanete";
import IExoplanete from "../../interfaces/IExoplanete";
import Planets from "../../common/components/Card/Planets";
import fetchComete from "../../api/Comete";

const Shop = ({ title }: any) => {
  const [data, setData] = useState<Array<any>>([]);

  const whichCard = () => {
    let res: Array<JSX.Element> = [];

    switch (title) {
      case "exoplanetes":
        res = data.map((el, index) => <Planets key={index} {...el} />);
        break;
      case "cometes":
        res = data.map((el, index) => <Planets key={index} {...el} />);
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

  return <div className="container-shop-items">{whichCard()}</div>;
};

export default Shop;
