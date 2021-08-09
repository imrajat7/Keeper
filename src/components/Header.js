import React from "react";
import KeepLogo from "assets/keep-logo.png";
import Hamburger from "assets/hamburger.png";
import Search from "assets/search.svg";
import Delete from "assets/delete.svg";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-ham-container">
                <img
                    src={Hamburger}
                    alt="hamburger-icon"
                    className="ham-icon"
                />
                <div className="logo-container">
                    <img src={KeepLogo} alt="keep-logo" />
                    <span>Keep</span>
                </div>
            </div>
            <div className="header-searchbar-wrapper">
                <button type="button">
                    <img src={Search} alt="search-icon" />
                </button>
                <input
                    className="header-searchbar-input"
                    placeholder="Search"
                />
                <button type="button">
                    <img src={Delete} alt="search-icon" />
                </button>
            </div>
            <div className="">last icons</div>
        </div>
    );
};

export default Header;
