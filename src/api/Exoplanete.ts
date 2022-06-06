import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import { planets } from "../constants/FlatIcons";
import fetchApi from "../utils/Api";
import { BILLION } from "../constants/Price";
import IData from "../interfaces/IData";

const URI: string =
  "https://exoplanets.nasa.gov/api/v1/planets/?order=display_name+asc&per_page=25&page=0&search=";

const JUPITER_RAYON: number = 69911;

let data: Array<IData> = [];

const fetchExoplanete = async (): Promise<IData[]> => {
  data = await fetchApi<IData>(URI, data, "items");

  data.forEach((el:any) => {
    el.size = el.pl_radj * JUPITER_RAYON;
    el.name = el.display_name;
    el.price = randomNotFloor(BILLION * 2, BILLION * 3);
    el.image = randomItemFromArray(planets);
    el.distance_from_earth = el.st_dist;
    el.type = "exoplanetes";
  });

  return data;
};

export default fetchExoplanete;
