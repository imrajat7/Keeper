import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [isExpanded, setIsExpanded] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((state) => {
            return {
                ...state,
                [name]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const handleExpanded = () => {
        setIsExpanded(true);
    };

    const handleKeyClick = (event) => {
        switch (event.keyCode) {
            case 27: {
                if (note.title || note.content) {
                    setIsExpanded(false);
                    onAdd(note);
                    setNote({
                        title: "",
                        content: "",
                    });
                }
                break;
            }
            default:
                return;
        }
    };

    return (
        <div className="create-note-container">
            <form>
                {isExpanded && (
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        onKeyDown={handleKeyClick}
                    />
                )}
                <p>
                    <textarea
                        name="content"
                        placeholder="Take a note..."
                        onClick={handleExpanded}
                        value={note.content}
                        onChange={handleChange}
                        onKeyDown={handleKeyClick}
                    ></textarea>
                </p>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
};

export default CreateNote;
