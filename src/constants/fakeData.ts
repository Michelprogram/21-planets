import IFakeData from "../interfaces/IFakeData";
import { randomNotFloor } from "../utils/Random";

const fakesData = <Array<IFakeData>>[
  { name: "Xantiyah", amount: randomNotFloor(50000000, 60000000) },
  { name: "Thlops", amount: randomNotFloor(50000000, 60000000) },
  { name: "Glopm", amount: randomNotFloor(50000000, 60000000) },
  { name: "Polshe", amount: randomNotFloor(50000000, 60000000) },
  { name: "Touaerrty", amount: randomNotFloor(50000000, 60000000) },
  { name: "Gmnkju", amount: randomNotFloor(50000000, 60000000) },
  /* { name: "Xautoi", amount: randomNotFloor(50000000, 60000000) },
  { name: "Tmploiu", amount: randomNotFloor(50000000, 60000000) },
  { name: "Gwcftui", amount: randomNotFloor(50000000, 60000000) },
  { name: "Xmloiu", amount: randomNotFloor(50000000, 60000000) },
  { name: "Tnuio", amount: randomNotFloor(50000000, 60000000) },
  { name: "Glop", amount: randomNotFloor(50000000, 60000000) },
 */
];

export default fakesData;
