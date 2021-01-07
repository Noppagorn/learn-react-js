import React from "react"

function handleClickMe(){
    console.log("It was click")
}

function ClickMe(){
    return (
        <div>
            <img onMouseOver={()=> console.log("hovered!")} src="https://www.fillmurray.com/200/100"></img>
            <br/>
            <br/>
            <button onClick={handleClickMe}>Click me</button>
        </div>
    )
}

export default ClickMe