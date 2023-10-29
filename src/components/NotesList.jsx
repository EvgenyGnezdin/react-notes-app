import Note from "./Note";
import NewNote from "./NewNote";

const NotesList = ({notes, handlerAddNote, delNote}) => {
 
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    key={note.id} 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    delNote={delNote}
                />
            ))}
            <NewNote handlerAddNote={handlerAddNote} />
        </div>
    )
}

export default NotesList;