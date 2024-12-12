import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Item from './pages/Item';
import AddItem from './pages/AddItem';
import ItemSearch from './pages/ItemSearch';

const App = () => {
  const API_URL='http://localhost:3500/items'
  const [item, setItem] = useState([
  ]);

  const [netItem, setNewItem] = useState('');
  const [itemSearch, setItemSearch] = useState('');
useEffect(()=>{
  const fetchItem= async()=>{
try{
 const responce = await fetch(API_URL)
 const lisItem= await responce.json();
 setItem(lisItem);
}catch (err){
  console.log(err.stack);
}
  };
  fetchItem()
},[]);
// dependencies control when its returns
  const handleDelete = (id) => {
    const updatedItems = item.filter((i) => i.id !== id);
    setItem(updatedItems);
    localStorage.setItem('list', JSON.stringify(updatedItems));
  };

  const handleCheck = (id) => {
    const updatedItems = item.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    setItem(updatedItems);
    localStorage.setItem('list', JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!netItem) return;
    const newItem = {
      id: item.length + 1,
      item: netItem,
      checked: false,
    };

    const updatedItems = [...item, newItem];
    setItem(updatedItems);
    setNewItem('');
    localStorage.setItem('list', JSON.stringify(updatedItems));
 
  };
  return (
    <BrowserRouter>
      <AddItem
        netItem={netItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <ItemSearch itemSearch={itemSearch} setItemSearch={setItemSearch} />
      <Item
        item={item.filter((i) =>
          i.item.toLowerCase().includes(itemSearch.toLowerCase())
        )}
        setItem={setItem}
        handleDelete={handleDelete}
        hadleCheck={handleCheck}
      />
    </BrowserRouter>
  );
};

export default App;
