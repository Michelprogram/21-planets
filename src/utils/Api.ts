import axios from "axios";

const fetchApi = async <T>(
  URI: string,
  data: Array<T>,
  nested: string
): Promise<T[]> => {
  if (data.length > 0) return data;
  data = [];

  try {
    const request = await axios.get(URI);
    request.data[nested].forEach((element: any) => {
      data.push(element);
    });
    return data;
  } catch (err) {
    console.warn(`Problème lors du fetch à l'api à l'URI (${URI}) : ${err}`);
    return [];
  }
};

export default fetchApi;
