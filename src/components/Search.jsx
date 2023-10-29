import { MdSearch } from "react-icons/md";


const Search = ({ handlerSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className='search-icons' size='1.3em'/>
            <input 
                type="text" 
                placeholder="Поиск..." 
                onChange={(event) => handlerSearchNote(event.target.value)}
            />
        </div>
    )
}

export default Search;