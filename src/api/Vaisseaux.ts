import axios from "axios";
import IVaisseau from "../interfaces/IVaisseau";

const URI: string = "https://api.spacexdata.com/v2/launches"

let data: Array<IVaisseau> = [];

const fetchVaisseaux = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    data = request.data;

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchVaisseaux;
