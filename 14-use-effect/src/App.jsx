import React, {useEffect, useState} from 'react'

const App = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)
    useEffect(() => {
        console.log('render');
    },[num]);
    return (
        <div>
            <h1>{num}</h1>
            <h1>{num2}</h1>
            <button onClick={()=>
            {
                setNum(num+1)
            }}
            onMouseEnter={()=>
            {
                setNum2(num2+10)
            }}>Click me</button>
        </div>
    )
}
export default App
