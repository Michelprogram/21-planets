import { Waiting as WaitingImg } from "../../constants/Images";

const Waiting = () => {
  return (
    <div className="waiting-container">
      <div className="container-shop-items">
        <div className="waiting-container">
          <img src={WaitingImg} alt="" />
          <p>
            Patientez pendant que nous cherchons vos données à travers le cosmos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
