import Description from '../common/components/Description';
import { SelectedItemProvider, useSelectedItem, useUpdateSelectedItem } from '../context/SelectedItemContext';

const Detail = () => {
    const selectedItem = useSelectedItem();

    return (
        <div>
                <Description name={selectedItem} className="shop-description"/>
        </div>
    );
};

export default Detail;