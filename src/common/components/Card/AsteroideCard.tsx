import { Link } from "react-router-dom";
import { useUpdateSelectedItem } from "../../../context/SelectedItemContext";
import IAsteroid from "../../../interfaces/IAsteroide";

const AsteroideCard = ({ id, asteroide }: any) => {
  const updateSelectedItem = useUpdateSelectedItem();
  function update() {
    updateSelectedItem(asteroide);
  }

  const getColor = () => {
    return { backgroundColor: asteroide.color };
  };

  return (
    <div className="container-card-planete">
      <div className="top-side" style={getColor()}>
        <img src={asteroide.icon} className="round" />
      </div>
      <div className="description">
        <div>
          <p className="title">{asteroide.name_limited}</p>

          <Link to="/detail" onClick={update}>
            <p>Voir plus &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsteroideCard;
