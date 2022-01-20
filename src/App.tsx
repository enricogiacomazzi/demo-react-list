import React, {useState, useEffect, useRef, ElementRef} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {ItemModel} from './models/itemModel';
import produce from "immer"
import Card from './components/Card';
import MyInput from './components/MyInput';
import MyForm from './components/MyForm';
import {useApp} from './hooks/useApp';


const App: React.FC = () => {
    const {items, toggleCompleted, deleteItem, inputValue, inputChange, addItem} = useApp();

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
        </>

    )
}

export default App;
