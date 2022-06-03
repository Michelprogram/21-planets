import IData from "./IData";

export default interface IExoplanete extends IData {
  display_name: string;
  description: string;
  discovery_date: string;
  planet_type: string;
  image: string;
  subtitle: string;
  st_dist: number;
  pl_massj: number;
}
