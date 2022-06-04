import ITitle from "../../interfaces/ITitle";
import { UpperFistLetter } from "../../utils/String";

const Title = ({ title, color }: ITitle) => {
  const getColor = () => {
    return { backgroundColor: color };
  };

  return (
    <div className="container-title">
      <div>
        <p>{UpperFistLetter(title)}</p>
        <div className="hr" style={getColor()}></div>
      </div>
    </div>
  );
};

export default Title;
