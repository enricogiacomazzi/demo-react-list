import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {ItemModel} from './models/itemModel';
import produce from "immer"


const App: React.FC = () => {

    const tmpItems: Array<ItemModel> = [
        {
            text: "Fare la spesa",
            completed: false,
        },
        {
            text: 'comprare il latte',
            completed: false,
        },
        {
            text: 'fare aperitivo',
            completed: true,
        }
    ].map(x => ({id: Math.random(), ...x}));

    const [items, setItems] = useState<Array<ItemModel>>(tmpItems);

    const toggleCompleted = (item: ItemModel) => {
        const updatedItems = produce(items, draft => {
            const index = draft.findIndex(x => x.id === item.id);
            draft[index].completed = !item.completed;
        });

        setItems(updatedItems);

        // setItems(items.map(i => {
        //     if(i.id === item.id) {
        //         return {
        //             ...i,
        //             completed: !i.completed
        //         }
        //         // i.completed = !i.completed;
        //         // return i;
        //     }
        //     return i;
        //
        // }));

        // const index = items.findIndex(x => x.id === item.id);
        // items[index].completed = !items[index].completed;
        // setItems([...items]);
    }

    const deleteItem = (item: ItemModel) => {
        // setItems(items.filter(x => x.id !== item.id));
        const updatedItems = produce(items, draft => {
            const index = draft.findIndex(x => x.id === item.id);
            draft.splice(index, 1);
        });
        setItems(updatedItems);
    }


    return (
        <List items={items} changeCompleted={toggleCompleted} onDelete={deleteItem}/>
    )
}

export default App;
