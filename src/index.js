import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles/styles.scss'

import Navbar from './components/Navbar/Navbar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

//Firebase
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDa03Pn7zum6PFG4CZ9ViZQChrF98obz3M",
  authDomain: "coder-ecommerce-react-fc25e.firebaseapp.com",
  projectId: "coder-ecommerce-react-fc25e",
  storageBucket: "coder-ecommerce-react-fc25e.appspot.com",
  messagingSenderId: "498195993516",
  appId: "1:498195993516:web:5c78a136b3327a33c12009"
};

const app = initializeApp(firebaseConfig)

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