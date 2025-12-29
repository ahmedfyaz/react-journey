import React, {useEffect, useState} from 'react'
import axios from 'axios'
const App = () => {

    const [userData, setUserData] = useState([])
    const [page, setPage] = useState(1)
    const getData = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}`);
        setUserData(response.data);
    };
    useEffect(() => {
        getData()
    },[page])
    const prev = () =>
    {
        if (page > 1)
        {
            setPage(page - 1)
        }
        else
        {
            setUserData([])
            setPage(page)
        }
    }
    const next = () =>{
        setUserData([])
        setPage(page + 1)
    }

    let printUserData = <h3 className={'text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} >loading....</h3>
    if(userData.length > 0){
        printUserData = userData.map(function (elem,idx){
            return <div key={idx}>
                <a href={elem.url} target="_blank" rel="noopener noreferrer">
                    <div className={'h-40 w-44 overflow-hidden rounded-xl bg-white'}>
                        <img className={'h-full w-full object-cover'} src={elem.download_url} alt={''} />
                    </div>
                    <h2>
                        {elem.author}
                    </h2>
                </a>
            </div>
        })
    }
    return (
        <div className={'bg-black active: h-screen text-white overflow-auto'}>

            <div className={'flex flex-wrap gap-4'} >
                {printUserData}
            </div>
            <div className={'flex justify-center items-center gap-4'}>
                <button className={'bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'}
                        onClick={()=>
                {
                    prev()
                }}>
                    Prev
                </button>
                <button className={'bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'}
                    onClick={()=>
                {
                    next()
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}
export default App
