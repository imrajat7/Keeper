import React, { useState } from "react";
import './LabelAddForm.css';

const LabelAddForm = ({ id, editNote, labels }) => {
    const [label, setLabel] = useState("");
    const handleAddClick = (event) => {
        console.log(label);
        if (label) editNote(id, { labels: [...labels, label] });
    };
    return (
        <div className="label-add-container">
            <h3>Add Label</h3>
            <input
                type="text"
                placeholder="label name"
                onChange={(e) => setLabel(e.target.value)}
            />
            <button onClick={handleAddClick}>Add Label</button>
        </div>
    );
};

export default LabelAddForm;
