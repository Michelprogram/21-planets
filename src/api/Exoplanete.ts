import axios from "axios";
import IExoplanete from "../interfaces/IExoplanete";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import { planets } from "../constants/FlatIcons";

const URI: string =
  "https://exoplanets.nasa.gov/api/v1/planets/?order=display_name+asc&per_page=25&page=0&search=";

const JUPITER_RAYON: number = 69911;

let data: Array<IExoplanete> = [];

const fetchExoplanete = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data.items.forEach((element: any) => data.push(element));
    data.forEach((el: IExoplanete) => {
      el.size = el.pl_radj;
      el.name = el.display_name;
      el.price = randomNotFloor(0, 1000000);
      el.image = randomItemFromArray(planets);
      el.distance_from_earth = el.st_dist;
      el.type = "exoplanetes";
    });
    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchExoplanete;
