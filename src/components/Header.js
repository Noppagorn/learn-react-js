import React from "react"

function Header(){
    const firstname = "Noppagorn"
    const lastname = "Panpa"
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }
    else {
        timeOfDay = "night"
    }
    return (
    <div>
    {/* <header className="navbar">This is ther header {firstname + " " + lastname}</header> */}
        <header className="navbar">This is ther header {`${firstname} ${lastname}`}</header>
        <p>Good {timeOfDay}</p>
    </div>
    )
}

export default Header