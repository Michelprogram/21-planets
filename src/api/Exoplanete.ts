import axios from "axios";
import IExoplanete from "../interfaces/IExoplanete";
import fetchApi from "../utils/Api";

const prefixURI: string = "https://exoplanets.nasa.gov/";
const URI: string =
  "https://exoplanets.nasa.gov/api/v1/planets/?order=display_name+asc&per_page=25&page=0&search=";

let data: Array<IExoplanete> = [];

const fetchExoplanete = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data.items.forEach((element: any) => data.push(element));
    data.forEach((el: IExoplanete) => (el.image = prefixURI + el.image));
    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchExoplanete;
