import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {ItemModel} from './models/itemModel';


const App: React.FC = () => {

    const [items, setItems] = useState<Array<ItemModel>>([]);

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

    const toggleCompleted = (id: ItemModel) => {
      console.log('cliccato', id);
    }


    return (
        <List items={items} changeCompleted={toggleCompleted}/>
    )
}

export default App;
