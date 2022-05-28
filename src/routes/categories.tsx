import React from "react";
import { Route } from "react-router-dom";

import Panier from "../common/components/Panier";
import Categories from "../pages/Categories";
import ITitle from "../interfaces/ITitle";

const categories: Array<ITitle> = [
  { title: "asteroides", color: "#713cf7" },
  { title: "exoplanetes", color: "#49fa95" },
  { title: "sattelites", color: "#50bec2" },
  { title: "packs", color: "#d6748a" },
  { title: "cometes", color: "#adbdbb" },
  { title: "etoiles", color: "#1d2a47" },
];

export default [
  <Route path="categories">
    {categories.map((cat: ITitle, index: number) => {
      return (
        <Route
          path={cat.title}
          element={
            <Categories key={index} title={cat.title} color={cat.color} />
          }
        />
      );
    })}
  </Route>,
];
