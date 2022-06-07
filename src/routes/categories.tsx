import React from "react";
import { Route } from "react-router-dom";

import Panier from "../common/components/Panier";
import Categories from "../pages/Categories";
import ITitle from "../interfaces/ITitle";
import { categories } from "../constants/ColorPalette";

export default [
  <Route path="categories">
    {categories.map((cat: ITitle, index: number) => {
      return (
        <Route
          path={cat.title}
          key={index}
          element={
            <Categories
              key={index}
              title={cat.title}
              color={cat.color}
              icons={cat.icons}
            />
          }
        />
      );
    })}
  </Route>,
];
