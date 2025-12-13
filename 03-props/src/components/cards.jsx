import React from 'react'

function H1(props) {
    return null;
}

const Cards = (prop) => {
    return (
        <div>
            <div className={'card'}>
                <img src={prop.image} alt={""}/>
                <H1>
                    {prop.user}
                </H1>
                <button >{prop.age}</button>
            </div>
        </div>
    )
}
export default Cards
