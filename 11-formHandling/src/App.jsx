import {useState} from "react";

const App = () => {

    const [value, setValue] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submitHandler', value)
        setValue('')
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input type={'text'} placeholder={'Enter your name'}
                value={value}
                onChange={(e)=>
                {
                    setValue(e.target.value)
                    console.log(value)
                }}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default App
