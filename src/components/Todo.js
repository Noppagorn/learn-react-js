import React from "react"
import TodoItem from "./TodoItem"
function Todo(props){
    const todoComponent = props.items.map(item =>{
        return (
            <TodoItem key={item.id} item={item}></TodoItem>
        )
    })
    return (
        <div>
            {todoComponent}
        </div>
    )
}

export default Todo