interface IPlanete{
    name:string,
    amount: number,
    superficie: number,
    masse: number,
    distanceFromEarth: number,
    icon?: string
}

export default interface IFakeData{
    id:number,
    planete: IPlanete
}