import React from "react";
import { colors } from "utility/colors";
import "./ColorSelector.css";

const ColorSelector = ({ id, editNote }) => {
    const handleColorClick = (color) => {
        editNote(id, { color: color });
    };
    return (
        <div className="color-selector-container">
            {colors.map((color) => (
                <div
                    className="color-selector-color"
                    style={{
                        backgroundColor: `${color.code}`,
                    }}
                    onClick={() => handleColorClick(color)}
                ></div>
            ))}
        </div>
    );
};

export default ColorSelector;
