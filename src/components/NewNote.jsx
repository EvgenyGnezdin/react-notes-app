import { useState } from "react";



const NewNote = ({handlerAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimited = 200; 

    const handlerChange = (event) => {
        if (characterLimited - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    const handlerSaveClick = () => {
        if (noteText.trim().length > 0){
            handlerAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea 
                cols="10" 
                rows="8" 
                placeholder="Введите текст заметки"
                value={noteText}
                onChange={handlerChange}>
            </textarea>
            <div className="note-footer">
                <small>Осталось {characterLimited - noteText.length} символов.</small>
                <button 
                    className="save" 
                    onClick={handlerSaveClick}>
                        Сохранить
                </button>
            </div>
        </div>
    ) 
}
export default NewNote;