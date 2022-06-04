import INews from "../interfaces/INews";
import fetchApi from "../utils/Api";

const URI: string = "https://api.spaceflightnewsapi.net/v3/articles";
let data: Array<INews> = [];

const fetchNews = async (): Promise<INews[]> => {
  data = await fetchApi<INews>(URI, data);
  return data;
};

export default fetchNews;
