interface IPlanete{
    name:string,
    amount: number,
    superficie: number,
    masse: number,
    distanceFromEarth: number,
}

export default interface IFakeData{
    id:number,
    planete: IPlanete
}