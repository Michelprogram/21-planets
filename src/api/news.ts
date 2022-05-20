import axios from "axios";
import INews from "../interfaces/INews";

const URI: string = "https://api.spaceflightnewsapi.net/v3/articles";
let data: Array<INews> = [];

const fetchNews = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data.forEach((element: INews) => data.push(element));
    return data;
  } catch (err) {
    console.warn("Problème lors du fetch à l'api de news : ", err);
    return [];
  }
};

export default fetchNews;
