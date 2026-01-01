import React, {useContext} from 'react'
import Nav2 from "./Nav2.jsx";
import {ThemeDataContext} from "../context/ThemeContext.jsx";
const Navbar = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    console.log(theme)
    return (
        <div className={theme}>
            <h2>Sheriyans</h2>
            <Nav2 />
        </div>
    )
}
export default Navbar
