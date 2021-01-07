import React from "react"

function TodoTtem(props){
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={(event) => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
            {/* <p>{" " + props.item.completed}</p> */}
        </div>
    )
}


export default TodoTtem;