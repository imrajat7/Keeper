import React from "react";

const Note = ({ id, title, content, onDelete }) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content} </p>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    );
};

export default Note;
