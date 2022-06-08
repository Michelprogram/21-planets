import Propositions from "../common/components/Propositions";
import PostBottom from "../common/components/PostBottom";
import useData from "../common/hooks/Data";
import Waiting from "../common/components/Waiting";

const Shop = () => {
  const { apiData } = useData();

  return (
    <div>
      {!apiData ? <Waiting /> : <Propositions className="shop-propositions" />}
      <PostBottom className="shop-post-bottom" />
    </div>
  );
};

export default Shop;
