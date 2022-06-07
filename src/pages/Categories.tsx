import React, { useEffect, useState } from "react";
import Title from "../common/components/Title";
import ITitle from "../interfaces/ITitle";

import Shop from "../common/components/Shop";

const Categories = ({ title, color, icons }: ITitle) => {
  return (
    <div className="container-categories-page">
      <Title title={title} color={color} icons={icons} />
      <Shop title={title} />
    </div>
  );
};

export default Categories;
