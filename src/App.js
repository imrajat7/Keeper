import { useState, useEffect } from "react";
import "./App.css";

// components import
import Header from "components/Header/Header";
import CreateNote from "components/CreateNote/CreateNote";
import Note from "components/Note/Note";
import LeftNavbar from "components/LeftNavbar/LeftNavbar";
function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const dataGotFromLocalStorage = JSON.parse(
            localStorage.getItem("notes")
        );
        if (dataGotFromLocalStorage) {
            setNotes(dataGotFromLocalStorage);
        }
    }, []);

    const addNote = (newNote) => {
        setNotes((state) => {
            localStorage.setItem("notes", JSON.stringify([...state, newNote]));
            return [...state, newNote];
        });
    };

    const deleteNote = (id) => {
        setNotes((state) => {
            localStorage.setItem(
                "notes",
                JSON.stringify([...state.filter((note) => note.id !== id)])
            );
            return [...state.filter((note) => note.id !== id)];
        });
    };

    const editNote = (id, properties) => {
        setNotes((state) => {
            const allNotes = state;
            const index = allNotes.findIndex((note) => note.id === id);
            Object.assign(allNotes[index], properties);
            localStorage.setItem("notes", JSON.stringify(allNotes));
            setNotes([...allNotes]);
        });
    };

    // const searchNote = (search) => {
    //     return notes.filter((note) => note.title.includes(search));
    // };

    return (
        <div className="App">
            <Header />
            <div className="body-container">
                <div className="left-navbar-wrapper">
                    <LeftNavbar />
                </div>
                <div className="notes-wrapper">
                    <CreateNote onAdd={addNote} />
                    <div>
                        {notes?.map((note, index) => (
                            <Note
                                key={index}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                onDelete={deleteNote}
                                color={note.color}
                                editNote={editNote}
                                labels={note?.labels}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
