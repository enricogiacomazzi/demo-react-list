import React from 'react';
// import './Item.css';
import cssModule from './Item.module.css';
import classNames from 'classnames';
import {css} from '@emotion/css';

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

    const textStyle: React.CSSProperties = {
        backgroundColor: 'lightcoral',
        textDecoration: completed ? 'line-through' : 'inherit'
    }

    const pippo = css`
      background-color: lightcoral;
      text-decoration: ${completed ? 'line-through' : 'inherit'}
    `;

    return (
        <li>
            <span className={pippo}>{text}</span>
            <button className={cssModule.btn} onClick={() => changeCompleted()}>
                <i className={doneCss}/>
            </button>
            <button className={cssModule.btn} onClick={() => onDelete()}>
                <i className="fa fa-trash"/>
            </button>
        </li>
    )
}

export default Item;
