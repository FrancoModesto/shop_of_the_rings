import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import CartWidget from './CartWidget/CartWidget'

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='categories'>
                <li><NavLink to={'/category/rings'}>Anillos</NavLink></li>
                <li><NavLink to={'/category/other'}>Otros</NavLink></li>
            </ul>
            <div className='logo'><Link to={'/'}><img src="./assets/logo.png" alt="Logo SOTR" /></Link></div>
            <div className='cartLabel'><CartWidget /></div>
        </div>
    )
}

export default Navbar