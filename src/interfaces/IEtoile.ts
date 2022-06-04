import IData from "./IData";

export default interface IEtoile extends IData {
  display_name: string,
  st_dist: number,
  st_mass:number,
  stellar_type: string;
}