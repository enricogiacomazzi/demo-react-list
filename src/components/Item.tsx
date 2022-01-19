import React from 'react';

interface ItemProps {
    //item: ItemModel
    // id: number;
    text?: string;
    completed: boolean;
    changeCompleted: () => void;
}


const Item:React.FC<ItemProps> = ({text = "pippo", completed, changeCompleted}) => {
    // const btnText: string = props.completed ? 'segna da fare' : 'completa';
    return (
        <li>
            {text}
            <button onClick={() => changeCompleted()}>{completed ? 'segna da fare' : 'completa'}</button>
        </li>
    )
}

export default Item;
