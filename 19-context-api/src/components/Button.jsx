import React, {useContext} from 'react'
import {ThemeDataContext} from "../context/ThemeContext.jsx";

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    return (
        <button onClick={()=>
        {
            if(theme === 'dark')
            {
                setTheme('light')
            }
            else
            {
                setTheme("dark")
            }
        }}>
            {theme}
        </button>
    )
}
export default Button
