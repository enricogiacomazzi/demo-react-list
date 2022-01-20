import React, {useState, useEffect, useRef, ElementRef} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {ItemModel} from './models/itemModel';
import produce from "immer"
import Card from './components/Card';
import MyInput from './components/MyInput';
import MyForm from './components/MyForm';


const App: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const inputElement = useRef<HTMLInputElement>(null);

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

    // let inputValue: string;

    const addItem = () => {
        // const inputValue = inputElement?.current?.value ?? '';
        // setItems([...items, {text: 'prova', completed: false, id: Math.random()}]);
        const updatedItems = produce(items, draft => {
            draft.push({text: inputValue, completed: false, id: Math.random()});
        });

        setItems(updatedItems);
        // inputValue = '';
        console.log('ciao', inputElement);
        if (inputElement && inputElement.current) {
            inputElement.current.value = '';
        }
        console.log('aaa', inputValue);
    }



    // const okp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     inputValue = event.currentTarget.value;
    //     console.log('input', inputValue);
    // }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value.slice(0, 16));
        // console.log('input change', e);
    }

    return (
        <>
            <Card>
                <List items={items} changeCompleted={toggleCompleted} onDelete={deleteItem}/>
                <br/>
                {/*<input ref={inputElement} type="text"/>*/}
                {/*<MyInput type="email" value={'ciao'} onChange={(value) =>  console.log('cambia', value)}/>*/}
                <input value={inputValue} onChange={inputChange} type="text"/>
                <button onClick={addItem}>Aggiungi</button>
            </Card>
            <Card>
                <MyForm />
            </Card>
        </>

    )
}

export default App;
