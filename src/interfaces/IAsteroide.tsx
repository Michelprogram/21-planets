interface AsteroideTest{
    name_limited: string,
    name: string,
    neo_reference_id: string,
    estimated_diameter_min:number,
    estimated_diameter_max:number,
    absolute_magnitude_h: number,
    distance_from_earth: string,
    velocity:number,
    superficie: number,
    icon: string,
    color: string
}

export default interface IAsteroid{ 
    id: string,
    asteroide: AsteroideTest
}