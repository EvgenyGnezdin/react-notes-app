const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Заметки</h1>
            <button className="save new" onClick={() => handleToggleDarkMode((previusDarkMode) => !previusDarkMode)}>Сменить режим</button>
        </div>
    )
}
export default Header;