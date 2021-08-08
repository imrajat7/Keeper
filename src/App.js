import { useState } from "react";
import "./App.css";

// components import
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes((state) => {
            return [...state, newNote];
        });
    };

    const deleteNote = (id) => {
        setNotes((state) => {
            return [...state.filter((note, index) => index !== id)];
        });
    };
    return (
        <div className="App">
            <Header />
            <CreateNote onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            ))}
        </div>
    );
}

export default App;
