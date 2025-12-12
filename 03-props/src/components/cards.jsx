import React from 'react'

const Cards = (props) => {
    return (
        <div className={'card'}>
            <img src={props.image} alt={'no'}/>
            <h1>
                {props.user}
            </h1>
            <p>
                {props.age}
            </p>
            <button>View Profile</button>
        </div>
    )
}
export default Cards
