import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, completed: false, editing: false }])
    setInput('')
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText, editing: false } : todo))
  }

  const toggleEdit = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, editing: !todo.editing } : todo))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <Header />
        <div className="flex gap-2 mt-4">
          <input
            className="flex-1 border px-2 py-1 rounded"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={addTodo}>Add</button>
        </div>
        <ToDoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
          onEdit={editTodo}
          onToggleEdit={toggleEdit}
        />
      </div>
    </div>
  )
}

export default App
