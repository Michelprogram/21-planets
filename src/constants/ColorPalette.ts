import ITitle from "../interfaces/ITitle";

const categories:Array<ITitle> = [
    {title:"asteroides",color: "#713cf7"},
    {title:"exoplanetes", color: "#49fa95"},
    {title:"vaisseaux", color:"#50bec2"},
    {title:"packs", color:"#d6748a"},
    {title:"cometes", color:"#adbdbb"},
    {title:"etoiles", color:"#3c52f2"}
] 

const getColor = (title:string):string => {
    let filteredCat = categories.filter((el:ITitle) => el.title === title)
    return filteredCat[0].color
  };

export {categories, getColor};