import Description from '../common/components/Description';
import { useSelectedItem } from '../context/SelectedItemContext';

const Detail = () => {
    const selectedItem = useSelectedItem();

    return (
        <div>
                <Description data={selectedItem} className="shop-description"/>
        </div>
    );
};

export default Detail;