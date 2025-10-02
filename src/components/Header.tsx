import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Searchbar from "./Searchbar";
import {
  headerLocationIcon,
  headerProfileIcon,
  headerChatIcon,
  headerCartIcon,
  headerCloseIcon,
  headerChevron,
  navPawIcon,
  nevMedIcon,
  navServiceIcon,
  myPetsIcon,
} from "@/assets/Svgicons";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="topbar-inner">
            <p>
              Royal Canin @ ₹149 – Only a few left! Don’t miss out, Shop Now!
            </p>
            <div className="close-icon">{headerCloseIcon} </div>
          </div>
        </div>
      </div>
      <div className="mid-bar">
        <div className="container">
          <div className="midbar-inner">
            <div className="logo">
              {" "}
              <Image src={logo} alt="Description" />
            </div>
            <Searchbar placeholder="Search for Products, Brands, and More" />
            <ul className="header-options">
              <li id="location">
                <Link href="" className="menus">
                  <div className="icon-bg">{headerLocationIcon}</div>
                  <div className="menu-name">
                    <span>Jaipur, RJ</span>
                    <span>{headerChevron}</span>
                  </div>
                </Link>
              </li>

              <li id="chat">
                <a href="" className="menus">
                  <div className="icon-bg">{headerChatIcon}</div>
                  <div className="menu-name">
                    <span>24/7 Help</span>
                    <span>{headerChevron}</span>
                  </div>
                </a>
              </li>

              <li id="profile">
                <a href="" className="menus">
                  <div className="icon-bg">{headerProfileIcon}</div>
                  <div className="menu-name">
                    <span>Sign In</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="" className="menus" id="cart">
                  <div className="icon-bg">
                    <div className="cart-indicator">2</div>
                    {headerCartIcon}
                  </div>
                  <div className="menu-name">
                    <span>Cart</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <ul className="nav-menu">
            <li id="Shop">
              <a href="javascript:void(0)" className="menu-item">
                {navPawIcon}
                <span>Shop</span>
                {headerChevron}
              </a>
            </li>

            <li id="Pharmacy">
              <a href="javascript:void(0)" className="menu-item">
                {nevMedIcon}
                <span>Pharmacy</span>
                {headerChevron}
              </a>
            </li>

            <li id="Services">
              <a href="javascript:void(0)" className="menu-item">
                {navServiceIcon}
                <span>Services</span>
                {headerChevron}
              </a>
            </li>

            <li id="Mypets">
              <a href="javascript:void(0)" className="menu-item">
                {myPetsIcon}
                <span>My Pets</span>
                {headerChevron}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
