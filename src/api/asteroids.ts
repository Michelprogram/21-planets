import axios from "axios";
import IAsteroide from "../interfaces/IAsteroide";
import {svgIcones as PlanetsSVG} from "../constants/Images"
import { random, randomItemFromArray, randomNotFloor } from "../utils/Random";
import { cometes } from "../constants/FlatIcons";

const color:string = "#713cf7";
const URI:string = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=eePZohcvQm8fLcAsRVmgOUZdYbwxGTGa6YbS4oaG"
let data: Array<IAsteroide> = [];

const randomIcon = () :string =>{
    return PlanetsSVG[random(0, PlanetsSVG.length)]
}

const fetchAsteroides = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
   /* request.data.near_earth_objects.forEach((element: any) => {
      let tmp:IAsteroide = {
        id: element.id,
        asteroide: {
          name_limited: element.name_limited,
          name: element.name,
          neo_reference_id: element.neo_reference_id,
          estimated_diameter_min: Math.round(element.estimated_diameter.kilometers.estimated_diameter_min),
          estimated_diameter_max: Math.round(element.estimated_diameter.kilometers.estimated_diameter_max),
          absolute_magnitude_h: Math.round(element.absolute_magnitude_h),
          distance_from_earth: Math.round(parseInt(element.close_approach_data[0].miss_distance.kilometers))+"",
          velocity: Math.round(element.close_approach_data[0].relative_velocity.kilometers_per_hour),
          superficie: (3.14*4*((randomNotFloor(2000,3000))/2)^2)*1000,
          icon: randomIcon(),
          color: color
        }
      }
      data.push(tmp)
    });*/

    const obj: any = request.data.near_earth_objects;
    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.image = randomItemFromArray(cometes);
      data.push(el);
    });

    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api des asteroides : ", err);
    return [];
  }
};

export default fetchAsteroides;
