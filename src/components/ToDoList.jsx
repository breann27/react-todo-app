// src/components/ToDoList.jsx
import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, onToggleComplete, onDelete, onEdit, onToggleEdit }) => {
  return (
    <ul className="mt-4 space-y-2">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleEdit={onToggleEdit}
        />
      ))}
    </ul>
  )
}

export default ToDoList
