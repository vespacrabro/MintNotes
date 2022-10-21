
import Note from "./Note";
import NoteCreator from "./NoteCreator";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  
  return (
    <div className="notes-list">
      {notes.map((note) => (
      <Note 
      id = {note.id} 
      text = {note.text} 
      date = {note.date} 
      handleDeleteNote = {handleDeleteNote}
      />))}
      
     <NoteCreator 
     handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NotesList;
