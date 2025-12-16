import React from 'react'

const App = () => {
    function btnClicked() {
        console.log("Button Clicked")
    }
    function mouseEntered(){
        console.log("Mouse Entered")
    }
    return (
        <div>
            <h1>Hello world</h1>
            <button onMouseEnter={mouseEntered} onDoubleClick={btnClicked}> FUCK You</button>
            <input type={'text'} placeholder={'Enter your name'}/>
        </div>
    )
}
export default App
