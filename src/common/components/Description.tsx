import { useState } from "react";
import IDescription from "../../interfaces/IDescription";
import { randomNotFloor } from "../../utils/Random";
import usePanier from "../hooks/panier";
import ButtonBlue from './Button/ButtonBlue';
import DescriptionDetaillee from "./DescriptionDetaillee";


const Description = ({data, className}:IDescription) => {
    const [buttonText, setButtonText] = useState("Ajouter au panier");
    const {add,size} = usePanier();

    //---------------------------------------description data--------------------------------------------------
    const prix = randomNotFloor(50000,70000);
    const superficie = (3.14*4*((randomNotFloor(2000,3000))/2)^2)*1000;
    //---------------------------------------------------------------------------------------------------------

    function addToCart(){
        add({
            id: size() + 1,
            planete: {
              name: data.name_limited,
              amount: prix,
              superficie: superficie,
              masse: randomNotFloor(50000000, 60000000),
              distanceFromEarth: data.earth_distance,
              icon: data.icon
            },
          });

          setButtonText("Ajouté !");
    }

    const getColor = () =>{
        return {backgroundColor: data.color}
    }

    return (
        <div className={'description-container '+className}>
            <img src={data.icon} className='icon' style={getColor()}/>

            <div className='description'>
                <h1>{data.name_limited}</h1>

               <DescriptionDetaillee data={data}/>

                <div className='achat'>
                    <p className='prix'>{prix} $</p>
                    <ButtonBlue text={buttonText} action={addToCart}/>
                </div>
            </div>
        </div>
    );
};

export default Description;