import React from 'react';
import "./Header.css"
import logo from "../image/logo.95f238a5.png"
const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;