import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
//import { createGames } from '../firebase/firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // createGames()
  
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <ToastContainer position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
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
  