import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note id={index} key={index} text={note} onDelete={deleteNote} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
