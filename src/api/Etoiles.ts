import { etoiles } from "../constants/FlatIcons";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import fetchApi from "../utils/Api";
import IData from "../interfaces/IData";

const URI: string = "https://exoplanets.nasa.gov/api/v1/stars/?order=display_name+asc&per_page=25&page=0&search=";
let data: Array<IData> = [];

const fetchEtoiles = async ():Promise<IData[]> => {
  if (data.length > 0) return data;
  data = [];

  try {
    data = await fetchApi<IData>(URI, data, "items");

    data.forEach((el:any) => {
      el.name = el.display_name;
      el.size = el.system_radius;
      el.description = el.subtitle;
      el.price = randomNotFloor(500000, 600000);
      el.image = randomItemFromArray(etoiles);
      el.distance_from_earth = el.st_dist;
      el.type = "etoiles";
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchEtoiles;
