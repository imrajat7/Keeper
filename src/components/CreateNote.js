import React, { useState } from "react";
import { colors } from "utility/colors";

const CreateNote = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
        color: colors[0],
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
        onAdd({ ...note, id: Date.now() });
        setNote({
            title: "",
            content: "",
            color: null,
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
                    onAdd({ ...note, id: Date.now() });
                    setNote({
                        title: "",
                        content: "",
                        color: null,
                    });
                }
                break;
            }
            default:
                return;
        }
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        if (name !== "title" && name !== "content") {
            setIsExpanded(false);
            onAdd({ ...note, id: Date.now() });
            setNote({
                title: "",
                content: "",
                color: null,
            });
        } else {
            setIsExpanded(false);
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
                        // onBlur={handleBlur}
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
                        // onBlur={handleBlur}
                    ></textarea>
                </p>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
};

export default CreateNote;
