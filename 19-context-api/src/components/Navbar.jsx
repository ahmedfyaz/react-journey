import React from 'react'
import Nav2 from "./Nav2.jsx";

const Navbar = (props) => {
    console.log(props)
    return (
        <div className={'nav'}>
            <h2>Sheriyans</h2>
            {props.children}
            <Nav2 theme={props.theme}/>
        </div>
    )
}
export default Navbar
