import React from 'react'
import style from './Header.Module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <h1>This is a header</h1>
            <button>Login</button>
        </div>
    )
}
export default Header
