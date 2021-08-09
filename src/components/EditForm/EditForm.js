import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import "./EditForm.css";

const EditForm = ({ open, setOpen, id, title, content, editNote }) => {
    const [properties, setProperties] = useState({
        title: title,
        content: content,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProperties((state) => {
            return {
                ...state,
                [name]: value,
            };
        });
    };

    const onClose = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    const handleEditFormSubmit = (e) => {
        e.stopPropagation();
        editNote &&
            editNote(id, {
                title: properties.title,
                content: properties.content,
            });
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="edit-form-container">
                <h3>Edit Note</h3>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={properties.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    value={properties.content}
                    onChange={handleInputChange}
                ></textarea>
                <button type="button" onClick={handleEditFormSubmit}>
                    Submit
                </button>
            </div>
        </Modal>
    );
};

export default EditForm;
