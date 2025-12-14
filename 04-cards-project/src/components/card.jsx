import React from 'react'
import {Bookmark} from "lucide-react";

const Card = (props) => {
    return (
        <div className={'card'}>
            <div>

                <div className={'top'}>
                    <img src={props.image} alt = ""/>
                    <button>Save <Bookmark size={11}/></button>
                </div>
                <div className={'center'}>
                    <h3>{props.company} <span>{props.days} days ago</span></h3>
                    <h2>{props.experience} {props.role}</h2>
                    <div className={'tag'}>
                        <h4>{props.jobType}</h4>
                        <h4>{props.experience}</h4>
                    </div>
                </div>
            </div>
            <div className={'bottom'}>
                <div>
                    <h3>{props.price}/hr </h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}
export default Card
