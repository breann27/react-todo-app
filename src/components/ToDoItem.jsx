// src/components/ToDoItem.jsx
import React, { useState } from 'react'

const ToDoItem = ({ todo, onToggleComplete, onDelete, onEdit, onToggleEdit }) => {
  const [editText, setEditText] = useState(todo.text)

  const handleEditSubmit = (e) => {
    e.preventDefault()
    onEdit(todo.id, editText)
  }

  return (
    <li className="flex items-center justify-between border p-2 rounded">
      {todo.editing ? (
        <form onSubmit={handleEditSubmit} className="flex-1 flex gap-2">
          <input
            className="border px-2 py-1 rounded w-full"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit" className="bg-green-500 text-white px-2 rounded">Save</button>
        </form>
      ) : (
        <>
          <span
            onClick={() => onToggleComplete(todo.id)}
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button className="text-yellow-500" onClick={() => onToggleEdit(todo.id)}>Edit</button>
            <button className="text-red-500" onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  )
}

export default ToDoItem
