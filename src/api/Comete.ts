import axios from "axios";
import { cometes } from "../constants/FlatIcons";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import IData from "../interfaces/IData";

const API_KEY: string = "lANSons0wGCDOJoLw8UiVXHbPOBEcerR0aCpvqk6";
const URI: string =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-20&end_date=2022-05-27&detailed=true&api_key=" +
  API_KEY;

let data: Array<IData> = [];

const fetchComete = async (): Promise<IData[]> => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);

    const obj: any = request.data.near_earth_objects;

    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.forEach((el: any) => {
        el.size = el.estimated_diameter.meters.estimated_diameter_max;
        el.description = el.orbital_data.orbit_class.orbit_class_description;
        el.price = randomNotFloor(150000, 100000);
        el.image = randomItemFromArray(cometes);
        el.distance_from_earth = parseInt(
          el.close_approach_data[0].miss_distance.kilometers
        );
        el.type = "cometes";
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
