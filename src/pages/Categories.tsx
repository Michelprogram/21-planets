import React, { useEffect, useState } from "react";
import Title from "../common/components/Title";
import ITitle from "../interfaces/ITitle";

import Shop from "../common/components/Shop";

const Categories = ({ title, color, icons }: ITitle) => {
  return (
    <div className="container-categories-page">
      <Title title={title} color={color} icons="" />
      <Shop title={title} icons={icons} color={color} />
    </div>
  );
};

export default Categories;
