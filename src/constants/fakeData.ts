import IFakeData from "../interfaces/IFakeData";
import { randomNotFloor } from "../utils/Random";

const fakesData: Array<IFakeData> = [
  {
    id: 0,
    planete: {
      name: "Xantiyah",
      amount: randomNotFloor(50000000, 60000000),
      superficie: randomNotFloor(50000000, 60000000),
      masse: randomNotFloor(50000000, 60000000),
      distanceFromEarth: randomNotFloor(50000000, 60000000),
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
    },
  },
  /* { id: 7, name: "Tmploiu", amount: randomNotFloor(50000000, 60000000) },
  { id: 8, name: "Gwcftui", amount: randomNotFloor(50000000, 60000000) },
  { id: 9, name: "Xmloiu", amount: randomNotFloor(50000000, 60000000) },
  { id: 10, name: "Tnuio", amount: randomNotFloor(50000000, 60000000) },
  { id: 11, name: "Glop", amount: randomNotFloor(50000000, 60000000) }, */
];

export default fakesData;
