import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, text, date, delNote}) => {
    return (
        <div className="note">
            <span className='text'>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={() => delNote(id)} 
                    className='delete-icon' 
                    size='1.3em'
                />
            </div>
        </div>
    )
}

export default Note; 