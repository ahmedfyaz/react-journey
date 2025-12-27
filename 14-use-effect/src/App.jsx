import React, {useEffect, useState} from 'react'

const App = () => {

    const [a, setA] = useState(0)
    const [b, setB2] = useState(100)

    function aVal()
    {
        console.log('value of a is changed')
    }
    function bVal()
    {
        console.log('value of b is changed')
    }
    useEffect(() => {
        console.log('render');
    },[a]);

    return (
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <button onClick={()=>
            {
                aVal()
                setA(a+1)
            }}>Change a</button>
            <button onClick={()=>
            {
                bVal()
                setB2(b+10)
            }}>Change b</button>
        </div>
    )
}
export default App
