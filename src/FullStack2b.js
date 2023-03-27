import { useState } from 'react';
import React from 'react';

import Note from './components/Note';

const FullStack2b = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
        content : newNote, /*the value of the input field*/
        important: Math.random() < 0.5,
        id: notes.length + 1
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const resetNewValue = (event) => {
    event.preventDefault();
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target)
    setNewNote(event.target.value)
  }

  //stores a list of all the notes to be displayed
  //note.filter returns array of all elements that meet the criterion in the callback function
  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        Now showing: {showAll? 'all':'only important'} <br></br>
        <button onClick = {() => setShowAll(!showAll)}>
          Show  {showAll?  'only important':'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote} onReset={resetNewValue}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  )
}

export default FullStack2b 