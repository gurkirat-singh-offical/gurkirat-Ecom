import React from "react";
import { IoMdPerson } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
function Header() {
  const bag = useSelector((store)=>store.bag)
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="pages/Men.html">Men</a>
          <a href="pages/women.html">Women</a>
          <a href="pages/kids.html">Kids</a>
          <a href="pages/home&living.html">Home & Living</a>
          <a href="pages/beauty.html">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoMdPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <CiHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <IoCartSharp />
            <span className="action_name ">Bag</span>
            <span className="bag-items">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
