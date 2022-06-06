import axios from "axios";
import IAsteroide from "../interfaces/IAsteroide";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";
import { cometes } from "../constants/FlatIcons";
import { THOUSAND } from "../constants/Price";

const URI: string =
  "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=eePZohcvQm8fLcAsRVmgOUZdYbwxGTGa6YbS4oaG";
let data: Array<IAsteroide> = [];

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

    data.forEach((el) => {
      el.size = el.estimated_diameter.kilometers.estimated_diameter_max;
      el.description = el.orbital_data.orbit_class.orbit_class_description;
      el.price = randomNotFloor(THOUSAND * 10, THOUSAND * 50);
      el.distance_from_earth = parseInt(
        el.close_approach_data[1].miss_distance.kilometers
      );
      el.type = "asteroides";
    });

    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api des asteroides : ", err);
    return [];
  }
};

export default fetchAsteroides;
