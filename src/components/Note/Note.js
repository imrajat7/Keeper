import React, { useState } from "react";
import Trash from "assets/trash.svg";
import Color from "assets/color.svg";
import Testing from "assets/testing.svg";
import ColorSelector from "components/ColorSelector/ColorSelector";
import LabelAddForm from "components/LabelAddForm/LabelAddForm";
import EditForm from "components/EditForm/EditForm";
import "./Note.css";

const Note = ({ id, title, content, onDelete, color, editNote, labels }) => {
    const [colorSelectorVisible, setColorSelectorVisible] = useState(false);
    const [labelFormVisible, setLabelFormVisible] = useState(false);
    const [editFormVisible, setEditFormVisible] = useState(false);
    const handleColorClick = () => {
        setColorSelectorVisible((state) => {
            return !state;
        });
    };
    const handleLabelClick = () => {
        setLabelFormVisible((state) => {
            return !state;
        });
    };

    const handleCardClick = () => {
        if (!colorSelectorVisible && !labelFormVisible)
            setEditFormVisible(true);
    };

    return (
        <div
            className="note"
            style={{ backgroundColor: `${color?.code}` }}
            role="button"
            onClick={() => handleCardClick()}
        >
            <EditForm
                open={editFormVisible}
                setOpen={setEditFormVisible}
                id={id}
                title={title}
                content={content}
                editNote={editNote}
            />
            <h1>{title}</h1>
            <p>{content} </p>
            {labels.map((label) => (
                <span className="label-chip">{label}</span>
            ))}
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
                <div
                    role="button"
                    tabindex="2"
                    onMouseEnter={() => setLabelFormVisible(true)}
                    onMouseLeave={() => setLabelFormVisible(false)}
                >
                    <img
                        src={Testing}
                        alt="bookmark-icon"
                        onClick={handleLabelClick}
                        onFocus={() => setLabelFormVisible(true)}
                        onBlur={() => setLabelFormVisible(false)}
                    />
                    {labelFormVisible && (
                        <LabelAddForm
                            id={id}
                            editNote={editNote}
                            labels={labels}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Note;
