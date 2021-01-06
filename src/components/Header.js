import React from "react"

function Header(){
    const firstname = "Noppagorn"
    const lastname = "Panpa"
    const date = new Date(2018,6,31,15)
    const hours = date.getHours()

    let timeOfDay

    const styles = {
        // backgroundColor:"#FF2D00",
        fontSize: "100%"
    }
    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "#04756F"
    }
    else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    }
    else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }


    return (
    <div>
    {/* <header className="navbar">This is ther header {firstname + " " + lastname}</header> */}
        <header className="navbar">This is ther header {`${firstname} ${lastname}`}</header>
        <h1 style={styles}>Good {timeOfDay}</h1>
    </div>
    )
}

export default Header