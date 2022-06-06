import { rockets } from "../constants/FlatIcons";
import IData from "../interfaces/IData";
import fetchApi from "../utils/Api";
import { randomItemFromArray, randomNotFloor } from "../utils/Random";

const URI: string = "https://api.spacexdata.com/v2/launches?limit=30";

let data: Array<IData> = [];

const fetchVaisseaux = async (): Promise<IData[]> => {
  data = await fetchApi<IData>(URI, data);

  data.forEach((el:any) => {
    el.name = el.mission_name;
    el.size = randomNotFloor(500, 600);
    el.description = el.details? el.details : "Super rocket made for you";
    el.price = randomNotFloor(500000, 600000);
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
