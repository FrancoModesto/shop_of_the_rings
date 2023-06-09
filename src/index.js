import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './styles/styles.scss'

import { CartProvider } from './contexts/CartContext'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import NotFound from './components/NotFound/NotFound'

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
//eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* Scrolls page to top when route is changed */}
      <CartProvider>
        <> {/* Toastify Container */}
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            limit={5}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
          />
        </>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemsListContainer />} />
          <Route path='/category/:categoryID' element={<ItemsListContainer />} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartContainer />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);