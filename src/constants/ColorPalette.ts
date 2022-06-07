import ITitle from "../interfaces/ITitle";

import { iconsBalls } from "./Images";

const categories: Array<ITitle> = [
  { title: "asteroides", color: "#713cf7", icons: iconsBalls[0] },
  { title: "exoplanetes", color: "#49fa95", icons: iconsBalls[1] },
  { title: "vaisseaux", color: "#50bec2", icons: iconsBalls[2] },
  { title: "packs", color: "#d6748a", icons: iconsBalls[3] },
  { title: "cometes", color: "#adbdbb", icons: iconsBalls[4] },
  { title: "etoiles", color: "#3c52f2", icons: iconsBalls[5] },
];

const getColor = (title: string): string => {
  let filteredCat = categories.filter((el: ITitle) => el.title === title);
  return filteredCat[0].color;
};

export { categories, getColor };
