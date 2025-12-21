import React, {useState} from 'react'

const App = () => {

    const [num, setNum] = useState(0);
    function onKick(){
        setNum(prevState => prevState + 1);
        setNum(prevState => prevState + 1);
        setNum(prevState => prevState + 1);


    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onKick}>Click</button>
        </div>
    )
}
export default App
