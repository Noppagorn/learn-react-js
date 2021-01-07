import React from "react"

function handlecheckBoxClick() {
    console.log("chang!")
}

function TodoTtem(props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={handlecheckBoxClick}/>
            <p>{props.item.text}</p>
        </div>
    )
}


export default TodoTtem;