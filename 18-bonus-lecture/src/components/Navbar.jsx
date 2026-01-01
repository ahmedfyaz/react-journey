
const Navbar = (props) => {

    function changeTheme() {
        console.log("Theme Change ",props.theme)
        props.setTheme('Dark')
    }
    return (
        <div>
            <p>{props.theme}</p>
            <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default Navbar
