import React, { useState } from "react";
import Trash from "assets/trash.svg";
import Color from "assets/color.svg";
import Testing from "assets/testing.svg";
import ColorSelector from "./ColorSelector";

const Note = ({ id, title, content, onDelete, color, editNote }) => {
    const [colorSelectorVisible, setColorSelectorVisible] = useState(false);
    const handleColorClick = () => {
        setColorSelectorVisible((state) => {
            return !state;
        });
    };
    return (
        <div className="note" style={{ backgroundColor: `${color?.code}` }}>
            <h1>{title}</h1>
            <p>{content} </p>
            <div className="note-icons-container">
                <div role="button" tabindex="0" onClick={() => onDelete(id)}>
                    <img src={Trash} alt="trash-icon" />
                </div>
                <div
                    role="button"
                    tabindex="1"
                    onMouseEnter={() => setColorSelectorVisible(true)}
                    onMouseLeave={() => setColorSelectorVisible(false)}
                >
                    <img
                        src={Color}
                        alt="colors-icon"
                        onClick={handleColorClick}
                        onFocus={() => setColorSelectorVisible(true)}
                        onBlur={() => setColorSelectorVisible(false)}
                    />
                    {colorSelectorVisible && (
                        <ColorSelector id={id} editNote={editNote} />
                    )}
                </div>
                <div role="button" tabindex="2">
                    <img src={Testing} alt="bookmark-icon" />
                </div>
            </div>
        </div>
    );
};

export default Note;
