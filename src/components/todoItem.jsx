import React from 'react'

const TodoItem = (props) => {
    return(
    <>
        <input type="checkbox" checked={props.data.isDone} onChange={ }/>{" "}
        <span>{props.data.task}</span>   
    </>
  )
}

export default TodoItem;

