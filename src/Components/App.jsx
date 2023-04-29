import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { createGames } from '../firebase/firebase'

function App() {
  // createGames()

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Welcome!"}/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/juego/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 - Not Found</h1>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
