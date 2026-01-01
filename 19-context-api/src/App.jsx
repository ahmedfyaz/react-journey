import React, {useState} from 'react'
import Navbar from "./components/Navbar.jsx";

const App = () => {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            <Navbar theme={theme}>
                <h1> Hello World</h1>
            </Navbar>
        </div>
    )
}
export default App
