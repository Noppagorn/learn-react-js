import React from "react"

function Joke(props){
    console.log("This Joke")
    console.log(props.question);
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLing}</h3>
        </div>
    )
}


export default Joke