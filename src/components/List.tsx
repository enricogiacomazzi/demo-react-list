import React from 'react';
import {ItemModel} from '../models/itemModel';
import Item from './Item';

interface ListProps {
    items: Array<ItemModel>,
    changeCompleted: (item: ItemModel) => void;
    onDelete: (item: ItemModel) => void;
}

const List: React.FC<ListProps> = ({items, changeCompleted, onDelete}) => {

    console.log('render');

    return (
        <ul>
            {items.map((item) =>
                <Item
                    key={item.id}
                    {...item}
                    changeCompleted={() => changeCompleted(item)}
                    onDelete={() => onDelete(item)}
                />)
            }
            <button className="btn">demo</button>
        </ul>
    )
}


export default List;
