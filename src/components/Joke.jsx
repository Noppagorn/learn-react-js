import React from "react"

function Joke(props){
    console.log("This Joke")
    console.log(props.question);
    const joke = props.joke
    return (
        <div>
            <h3 style={{display: !joke.question && "none"}}>Question: {joke.question}</h3>
            <h3 style={{color: !joke.question && "#888888"}}>Answer: {joke.punchLing}</h3>
            <p>{joke.price.toLocaleString("en-us",{style : "currency",currency:"USD"})}</p>
        </div>
    )
}


export default Joke