import axios from "axios";
import IComete from "../interfaces/IComete";
import { cometes, etoiles } from "../constants/FlatIcons";
import { randomItemFromArray } from "../utils/Random";
import IEtoile from "../interfaces/IEtoile";

const URI: string = "https://exoplanets.nasa.gov/api/v1/stars/?order=display_name+asc&per_page=25&page=0&search=";
let data: Array<IEtoile> = [];

const fetchEtoiles = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);

    const obj: any = request.data.items;

    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.image = randomItemFromArray(etoiles);
      data.push(el);
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchEtoiles;
