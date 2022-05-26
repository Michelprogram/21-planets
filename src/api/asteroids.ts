import axios from "axios";
import IAsteroide from "../interfaces/IAsteroide";

const URI: string = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
let data: Array<any> = [];

const fetchAsteroides = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data.near_earth_objects.map((element: any) => data.push(element));
    
    console.log(data);

    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api des asteroides : ", err);
    return [];
  }
};

export default fetchAsteroides;
