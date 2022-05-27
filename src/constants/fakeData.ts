import IFakeData from "../interfaces/IFakeData";
import { random, randomNotFloor } from "../utils/Random";
import {svgIcones as PlanetsSVG} from "../constants/Images"

const randomIcon = () :string =>{
  return PlanetsSVG[random(0, PlanetsSVG.length)]
}

const fakesData: Array<IFakeData> = [
  {
    id: 0,
    planete: {
      name: "Xantiyah",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 1,
    planete: {
      name: "Thlops",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 2,
    planete: {
      name: "Glopm",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 3,
    planete: {
      name: "Polshe",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 4,
    planete: {
      name: "Touaerrty",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 5,
    planete: {
      name: "Gmnkju",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  },
  {
    id: 6,
    planete: {
      name: "Xautoi",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
      icon: randomIcon()
    },
  }
];

export default fakesData;
