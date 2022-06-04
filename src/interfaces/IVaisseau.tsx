import IData from "./IData";

export default interface IVaisseau extends IData {
  mission_name: string;
  details: string;
  launch_date_local: string;
  launch_date_utc: string;
  launch_site: {
    site_name: string;
  };
  links: {
    flickr_images: Array<string>;
  };
}
