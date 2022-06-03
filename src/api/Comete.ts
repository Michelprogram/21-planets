import axios from "axios";
import IComete from "../interfaces/IComete";
import { cometes } from "../constants/FlatIcons";
import { randomItemFromArray } from "../utils/Random";

const API_KEY: string = "lANSons0wGCDOJoLw8UiVXHbPOBEcerR0aCpvqk6";
const URI: string =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-20&end_date=2022-05-27&detailed=true&api_key=" +
  API_KEY;

let data: Array<IComete> = [];

const fetchComete = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);

    const obj: any = request.data.near_earth_objects;

    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.forEach((el: IComete) => {
        el.image = randomItemFromArray(cometes);
        data.push(el);
      });
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchComete;
