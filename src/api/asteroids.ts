import axios from "axios";
import IAsteroide from "../interfaces/IAsteroide";

const URI: string = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
let data: Array<IAsteroide> = [];

const fetchAsteroides = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data.forEach((element: IAsteroide) => data.push(element));
    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api des asteroides : ", err);
    return [];
  }
};

export default fetchAsteroides;
