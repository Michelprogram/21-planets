import axios from "axios";
import IComete from "../interfaces/IComete";

const cometesImages: Array<string> = [
  "/2737/2737918.png",
  "/7105/7105640.png",
  "/2530/2530826.png",
  "/2531/2531034.png",
  "/4698/4698808.png",
  "/361/361663.png",
  "/2229/2229770.png",
  "/7480/7480279.png",
  "/2737/2737940.png",
  "/2534/2534248.png",
].map((el: string) => (el = "https://cdn-icons-png.flaticon.com/512" + el));

const API_KEY: string = "lANSons0wGCDOJoLw8UiVXHbPOBEcerR0aCpvqk6";
const URI: string =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-20&end_date=2022-05-27&detailed=true&api_key=" +
  API_KEY;

let data: Array<IComete> = [];

const fetchComete = async () => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);

    const obj: any = request.data.near_earth_objects;

    Object.values(obj).forEach((el: any) => {
      el = el as Array<any>;
      el.forEach((el: IComete) => {
        const id = parseInt(el.id.toString().slice(-1));
        el.image = cometesImages[id];
        data.push(el);
      });
    });

    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchComete;
