import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/styles.scss'

import Navbar from './components/Navbar/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Navbar se pone afuera del Routing para que aparezca en todas las rutas */}
      <Routes>
        <Route exact path='/' element={<ItemsListContainer />} />
        <Route exact path='/category/:categoryID' element={<ItemsListContainer />} />
        <Route exact path='/item/:itemID' element={<ItemDetailContainer />} />
        <Route exact path='/cart' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);