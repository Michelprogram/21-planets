import IData from "./IData";

export default interface IComete extends IData {
  date: string;
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number;
    };
  };
  close_approach_data: [
    {
      close_approach_date: string;
      relative_velocity: {
        kilometers_per_hour: string;
      };

      miss_distance: {
        kilometers: string;
      };
      orbiting_body: string;
    }
  ];
  orbital_data: {
    orbit_class: {
      orbit_class_type: string;
      orbit_class_description: string;
    };
  };
}
