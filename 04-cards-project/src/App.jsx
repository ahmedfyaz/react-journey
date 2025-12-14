import React from 'react'
import Card from "./components/card.jsx";
const App = () => {
    const arr =
        [
            {
        company:"Amazon"
    },{company: "fayyaz"},{company: "awan"}]
    return (
        <div className={"parent"}>
            {arr.map(function (elem) {
                return <Card company={elem.company}/>
            })}
        </div>
    )
}
export default App



// https://imgs.search.brave.com/FUWEcyC8ISzobxF7cnrKQSk_Uegq2QmN0YZ7tWQaoIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvMjUw/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc