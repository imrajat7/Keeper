import React from "react";
import IdeaLogo from "assets/idea.svg";
import Reminders from "assets/reminders.svg";
import Testing from "assets/testing.svg";
import EditLabels from "assets/editLabels.svg";
import Trash from "assets/trash.svg";
import Archive from "assets/archive.svg";
import "./LeftNavbar.css";

const navbarItems = [
    { label: "Notes", icon: IdeaLogo, class: "active" },
    { label: "Reminders", icon: Reminders },
    { label: "testing", icon: Testing },
    { label: "Edit labels", icon: EditLabels },
    { label: "Archive", icon: Archive },
    { label: "Trash", icon: Trash },
];

const LeftNavbar = () => {
    return (
        <div class="left-navbar-container">
            {navbarItems.map((item) => {
                return (
                    <div
                        role="button"
                        className={`left-navbar-item-container ${item?.class}`}
                    >
                        <img
                            src={item.icon}
                            alt="Idea logo"
                            className="left-navbar-svg"
                        />
                        <span className="left-navbar-span">{item.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default LeftNavbar;
