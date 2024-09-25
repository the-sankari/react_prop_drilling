import React from 'react'

const TodoItem = ({task, deletetask}) => {
  return (
    <div>
      <p>{task.task}</p>
      <button onClick={deletetask} >Delete</button>
    </div>
  )
}

export default TodoItem
