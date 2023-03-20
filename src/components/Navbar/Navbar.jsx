import React from 'react'
import { Link } from 'react-router-dom'

import CartWidget from './CartWidget/CartWidget'

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='categories'>
                <li><Link to={'/category/rings'} className=''>Anillos</Link></li>
                <li><Link to={'/category/other'}>Otros</Link></li>
            </ul>
            <div className='logo'><Link to={'/'}><img src="./assets/logo.png" alt="Logo SOTR" /></Link></div>
            <div className='cartLabel'><Link to={'/cart'}><CartWidget /></Link></div>
        </div>
    )
}

export default Navbar