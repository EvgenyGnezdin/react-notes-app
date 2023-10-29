import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header'; 
import './App.scss';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'Hello first note',
    date: '11/02/2023'
  },
  {
    id: nanoid(),
    text: 'Hello second note',
    date: '15/02/2023'
  },
  {
    id: nanoid(),
    text: 'Hello third note',
    date: '25/02/2023'
  }, 
  {
    id: nanoid(),
    text: 'Hello third note',
    date: '25/02/2023'
  }])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNote) {
      setNotes(savedNote);
    }
    
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes])


  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const delNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handlerSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handlerAddNote={addNote}
          delNote={delNote}/>
      </div>
    </div>
  )
}

export default App
