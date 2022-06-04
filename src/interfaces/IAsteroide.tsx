import IData from "./IData";

export default interface IAsteroide extends IData {
  name_limited: string;
  name: string;
  neo_reference_id: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
  close_approach_data: [
    {
      relative_velocity: {
        kilometers_per_hour: string;
      };
    },
    {
      miss_distance: {
        kilometers: string;
      };
      orbiting_body: string;
    }
  ];
  orbital_data: {
    orbit_class: {
      orbit_class_description: string;
    };
  };
}
