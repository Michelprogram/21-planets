import axios from "axios";
import { rockets } from "../constants/FlatIcons";
import IVaisseau from "../interfaces/IVaisseau";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";

const URI: string = "https://api.spacexdata.com/v2/launches?limit=30";

let data: Array<IVaisseau> = [];

const fetchVaisseaux = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    data = request.data;

    data.forEach((el) => {
      el.name = el.mission_name;
      el.size = randomNotFloor(500, 600);
      el.description = el.details;
      el.price = randomNotFloor(500000, 600000);
      el.image =
        el.links.flickr_images.length == 0
          ? randomItemFromArray(rockets)
          : el.links.flickr_images[0];
      el.distance_from_earth = randomNotFloor(500, 600);
      el.type = "vaisseaux";
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchVaisseaux;
