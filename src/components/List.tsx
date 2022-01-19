import React from 'react';
import {ItemModel} from '../models/itemModel';
import Item from './Item';

interface ListProps {
    items: Array<ItemModel>,
    changeCompleted: (item: ItemModel) => void;
}

const List: React.FC<ListProps> = ({items, changeCompleted}) => {

    console.log('render');

    return (
        <ul>
            {items.map(({id, ...rest}) =>
                <Item
                    key={id}
                    {...rest}
                    changeCompleted={() => changeCompleted({id, ...rest})}
                />)
            }
        </ul>
    )
}


export default List;
