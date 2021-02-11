//jshint esversion:6
import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
function Header(){
  return(
    <div className="header">
    <Link to='/'>
    <img className="header_logo" src="/images/pngItem_12080.png"/>
    </Link>
    <div className="header_search">
    <input className="hearder_search_input" type="text" />
    {/* logo*/}<SearchIcon className="header_search_icon"/>
    </div>
    <div className="header_nav">
      <div className="header_option">
        <span className="header_option_line1">
        Hello guest
        </span>
        <span className="header_option_line2">
        Sign in
        </span>
      </div>
      <div className="header_option">
        <span className="header_option_line1">
        Return
        </span>
        <span className="header_option_line2">
        & Orders
        </span>
      </div>
      <div className="header_option">
        <span className="header_option_line1">
        Your
        </span>
        <span className="header_option_line2">
        Prime
        </span>
      </div>
      <div className="header_basket">
      <Link to='/checkout'>
      <ShoppingBasketIcon />
      </Link>
      <span className="header_option_line2 header_basketCount">
      0
      </span>
      </div>
    </div>
  </div>
  );
}
export default Header
