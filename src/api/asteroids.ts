import axios from "axios";
import IAsteroide from "../interfaces/IAsteroide";
import { svgIcones as PlanetsSVG } from "../constants/Images";
import { random, randomItemFromArray, randomNotFloor } from "../utils/Random";
import { cometes } from "../constants/FlatIcons";

const color: string = "#713cf7";
const URI: string =
  "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=eePZohcvQm8fLcAsRVmgOUZdYbwxGTGa6YbS4oaG";
let data: Array<IAsteroide> = [];

const randomIcon = (): string => {
  return PlanetsSVG[random(0, PlanetsSVG.length)];
};

const fetchAsteroides = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);

    const obj: any = request.data.near_earth_objects;
    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.image = randomItemFromArray(cometes);
      data.push(el);
    });

    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api des asteroides : ", err);
    return [];
  }
};

export default fetchAsteroides;
