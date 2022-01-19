import React from 'react';
// import './Item.css';
import css from './Item.module.css';
import classNames from 'classnames';

interface ItemProps {
    //item: ItemModel
    // id: number;
    text?: string;
    completed: boolean;
    changeCompleted: () => void;
    onDelete: () => void;
}


const Item:React.FC<ItemProps> = ({text = "pippo", completed, changeCompleted, onDelete}) => {
    // const btnText: string = props.completed ? 'segna da fare' : 'completa';
    const doneCss = classNames([
        'fa',
        {'fa-check': completed},
        {'fa-times': !completed},
    ]);
    return (
        <li>
            {text}
            <button className={css.btn} onClick={() => changeCompleted()}>
                <i className={doneCss}/>
            </button>
            <button className={css.btn} onClick={() => onDelete()}>
                <i className="fa fa-trash"/>
            </button>
        </li>
    )
}

export default Item;
