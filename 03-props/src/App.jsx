import React from 'react'
import Cards from "./components/cards.jsx";
const App = () => {
    return (
        <div className={'parent'}>
            <Cards user={'Ahmed'} age={19} image={"https://images.unsplash.com/photo-1762751358910-345cde48bf9c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <Cards user={'Masfa'} age={18}  image={"https://images.unsplash.com/photo-1753847726685-6af24062aa9e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </div>
    )
}
export default App
