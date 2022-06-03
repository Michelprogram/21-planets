interface SateliteTest{
    name: string,
    launch_date_local: string,
    launch_date_utc: string,
    launch_site: string,
    image: string,
    icon: string,
    color: string
}

export default interface ISatelite{ 
    id: string,
    asteroide: SateliteTest
}