import { rockets } from "../constants/FlatIcons";
import { MILLION } from "../constants/Price";
import IVaisseau from "../interfaces/IVaisseau";
import fetchApi from "../utils/Api";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";

const URI: string = "https://api.spacexdata.com/v2/launches?limit=30";

let data: Array<IVaisseau> = [];

const fetchVaisseaux = async (): Promise<IVaisseau[]> => {
  data = await fetchApi<IVaisseau>(URI, data);

  data.forEach((el) => {
    el.name = el.mission_name;
    el.size = randomNotFloor(500, 600);
    el.description = el.details;
    el.price = randomNotFloor(MILLION * 100, MILLION * 300);
    el.image =
      el.links.flickr_images.length == 0
        ? randomItemFromArray(rockets)
        : el.links.flickr_images[0];
    el.distance_from_earth = randomNotFloor(500, 600);
    el.type = "vaisseaux";
  });

  return data;
};

export default fetchVaisseaux;
