import { etoiles } from "../constants/FlatIcons";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import IEtoile from "../interfaces/IEtoile";
import fetchApi from "../utils/Api";

const URI: string = "https://exoplanets.nasa.gov/api/v1/stars/?order=display_name+asc&per_page=25&page=0&search=";
let data: Array<IEtoile> = [];

const fetchEtoiles = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    data = await fetchApi<IEtoile>(URI, data, "items");

    data.forEach((el) => {
      el.name = el.display_name;
      el.size = randomNotFloor(500, 600);
      el.description = el.display_name;
      el.price = randomNotFloor(500000, 600000);
      el.image = randomItemFromArray(etoiles);
      el.distance_from_earth = randomNotFloor(500, 600);
      el.type = "etoiles";
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchEtoiles;
