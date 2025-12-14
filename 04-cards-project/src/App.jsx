import React from 'react'
import {Bookmark} from "lucide-react";

const App = () => {
    return (
        <div className={"parent"}>
            <div className={'card'}>
                <div>

                    <div className={'top'}>
                        <img src={"https://imgs.search.brave.com/1SmDks4CPsuEM1txgXrUz2cuSfM8XLjvrvTIacq4V2s/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODYwYzA4NzE1/OTE2NzM1YTQ1OWNj/Zjg0MmI0Y2U2YzI2/ODE5NmZhNGZjODA4/N2Y0NmI1ZmU4ZWQy/ZmM2MjdmMS93d3cu/YW1hem9uLmNvbS8"} alt = ""/>
                        <button>Save <Bookmark size={11}/></button>
                    </div>
                    <div className={'center'}>
                        <h3>Amazon <span>5 days ago</span></h3>
                        <h2>Senior UI/UX Designer</h2>
                        <div className={'tag'}>
                            <h4>Part Time</h4>
                            <h4>Senior Level</h4>
                        </div>
                    </div>
                </div>
                <div className={'bottom'}>
                        <div>
                            <h3>$120/hr </h3>
                            <p>Faisalabad,Pakistan</p>
                        </div>
                        <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}
export default App



// https://imgs.search.brave.com/FUWEcyC8ISzobxF7cnrKQSk_Uegq2QmN0YZ7tWQaoIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvMjUw/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc