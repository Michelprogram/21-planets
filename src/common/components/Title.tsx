import ITitle from "../../interfaces/ITitle";

const Title = ({ title, color }: ITitle) => {

    const getColor = () =>{
        return {backgroundColor: color}
    }

  return (
    <div className="container-title">
        <p>{title}<hr style={getColor()}/></p>
    </div>
  );
};

export default Title;
