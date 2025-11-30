import './header.css'
import {Link} from 'react-router'
export default function Header(){
    return(
        <>
        <div className="header">
        <div className="left-section">
            <Link to="/" className="header-Link">
            <img className="logo"
                src="images/logo-white.png" />
            <img className="mobile-logo"
                src="images/mobile-logo-white.png" />
            </Link>
        </div>

        <div className="middle-section">
            <input className="search-bar" type="text" placeholder="Search" />

            <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
            </button>
        </div>

        <div className="right-section">
            <Link className="orders-Link header-Link" to="/order">

            <span className="orders-text">Orders</span>
            </Link>

            <a className="cart-Link header-Link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">2</div>
            <div className="cart-text">Cart</div>
            </a>
        </div>
        </div></>
    )
}