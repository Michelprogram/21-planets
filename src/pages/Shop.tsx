import Propositions from '../common/components/Propositions';
import PostBottom from '../common/components/PostBottom';
import Description from '../common/components/Description';

const Shop = () => {
    return (
        <div>
            <Description name='jeje' forme={true} className="shop-description"/>
            <Propositions className="shop-propositions"/>
            <PostBottom className="shop-post-bottom"/>
            
        </div>
    );
};

export default Shop;