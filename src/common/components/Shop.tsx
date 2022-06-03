import React, { useEffect, useState } from "react";

import fetchExoplanete from "../../api/Exoplanete";
import IExoplanete from "../../interfaces/IExoplanete";
import Planets from "../../common/components/Card/Planets";
import fetchComete from "../../api/Comete";
import { Waiting } from "../../constants/Images";
import fetchVaisseaux from "../../api/Vaisseaux";

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
        res = data.map((el, index) => <Planets key={index} {...el} />);
        break;
      case "cometes":
        res = data.map((el, index) => <Planets key={index} {...el} />);
        break;
      case "vaisseaux":
        res = data.filter((el) => el.links.flickr_images.length > 0)
                  .map((el, index) => <Planets key={index} name={el.mission_name} image={el.links.flickr_images[0]}/>);
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
      case "vaisseaux":
        fetchVaisseaux().then((el) => setData(el));
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
