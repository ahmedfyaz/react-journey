import React, {useState} from 'react'
const App = () => {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()

        const copyTask = [...task]

        copyTask.push({title, detail})

        setTask(copyTask)

        setTitle('')
        setDetail('')
    }


    return (
        <div className={'h-screen lg:flex bg-black text-white overflow-auto'}>
                <form onSubmit={(e)=>submitHandler(e)}
                    className={'flex lg:w-1/2 p-10 items-start flex-col gap-4'}>
                    <h1 className={'text-3xl font-bold'}>Add Notes</h1>
                    {/*First Input for heading*/}
                        <input value={title}
                                type={'text'}
                                className={'font-medium px-5 w-full py-2 outline-none border-2 rounded'}
                                placeholder={'Enter Task Heading'}
                                onChange={(e)=>{
                                    setTitle(e.target.value)
                                }}
                        />
                    {/*Detailed input*/}
                        <textarea
                                className={'font-medium px-5 h-32 w-full py-2 outline-none border-2 rounded'}
                                placeholder={'Enter Details'}
                                onChange={(e)=>{
                                    setDetail(e.target.value)
                                }}
                                value={detail}
                        />

                        <button className={'font-medium active:bg-blacks bg-white text-black w-full px-5 py-2 outline-none rounded'}>Add Notes</button>
                </form>
                <div className={'lg:w-1/2 lg:border-l-2 p-10'}>
                    <h1 className={'text-3xl font-bold'}>Your Notes</h1>
                        <div className={'flex gap-5 mt-5 flex-wrap h-full overflow-auto '}>
                            {task.map((function(e ,idx){
                                return <div key={idx} className={'h-52 w-40 text-black rounded-2xl bg-white'}>
                                    <h3 className={'leading-tight text-xl font-bold'}>{e.title}</h3>
                                    <p className={'mt-2 leading-tight font-medium text-gray-800'}>{e.detail}</p>
                                </div>
                            }))}
                        </div>
                </div>
        </div>
    )
}
export default App
