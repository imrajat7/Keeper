import React from "react";
import KeepLogo from "../assets/keep-logo.png";
import Hamburger from "../assets/hamburger.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-ham-container">
                <img src={Hamburger} alt="hamburger-icon" className="ham-icon"/>
                <div className="logo-container">
                    <img src={KeepLogo} alt="keep-logo" />
                    <span>Keep</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
