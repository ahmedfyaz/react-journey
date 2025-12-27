import React, {useState} from 'react'
import axios from 'axios'
const App = () => {

    const [apiKey, setApiKey] = useState("https://picsum.photos/v2/list?page=2&limit=100")
    const getData = async ()=>
    {
        const response = await  axios.get(apiKey)
        const data = await  response.data
        console.log(data)
    }
    return (
        <div className={'bg-black h-screen text-white'}>
            <button onClick={getData}
                className={'bg-green-600 m-4 active:scale-95 cursor-pointer text-white px-5 py-2 rounded'}>
                Get Data
            </button>
        </div>
    )
}
export default App
