import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import '../styles/navBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className="logo">Plants And Health</div>
            <ul>
                <li>Infusions</li>
                <li>Esential Oils</li>
                <li>Seeds</li>
                <li>Suplements</li>
            </ul>
            <div className="shopping-card"><HiOutlineShoppingCart /></div>
        </nav>
    )
}

export default NavBar
