import ITitle from "../../interfaces/ITitle";
import {UpperFistLetter} from "../../utils/String"

const Title = ({ title, color }: ITitle) => {

    const getColor = () =>{
        return {backgroundColor: color}
    }


  return (
    <div className="container-title">
        <p>{UpperFistLetter(title)}<hr style={getColor()}/></p>
    </div>
  );
};

export default Title;
