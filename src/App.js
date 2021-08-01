import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filterByStatus = (todos = [], status = '') => {
  switch (status) {
    case 'ACTIVE':
      return todos.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return todos.filter(item => item.isCompleted)
    default:
      return todos;
  }
  
}

export default function App() {
  const [todosList, setTodosList] = useState(() => {
    const todosList = JSON.parse(localStorage.getItem('todo-list'));
    return todosList || [];
  })
  const [editId, setEditId] = useState(null);
  const [status, setStatus] = useState('ALL')

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todosList))
  }, [todosList])

  const onAddTodo = (todo = {}) => {
    setTodosList([...todosList, todo]);
  }

  const handleEditTodo = (id) => {
    setEditId(id)
  }

  const editTodo = (todo, index) => {
    const newTodos = [...todosList];
    newTodos.splice(index, 1 , todo);
    setTodosList(newTodos)
  }

  const handleMarkCompleted = (id) => {
    const newTodo = todosList.map(todo => {
      return (
        todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo
      )
    })
    setTodosList(newTodo);
  }

  const handleRemoveTodo = (id) => {
    const newTodos = todosList.filter(todo => todo.id !== id);
    setTodosList(newTodos);
  }

  const filterTodoLeft = (todos = []) => {
    return todos.filter(item => !item.isCompleted);
  }

  const handleClearCompleted = () => {
    const newTodo = [...todosList];
    setTodosList(filterByStatus(newTodo, 'ACTIVE'))
  }

  const footer = todosList.length ?
    (
      <Footer
        activeBtn={status}
        filterStatus={(status) => setStatus(status)}
        numOfTodoLeft={filterTodoLeft(todosList).length}
        numOfTodo={todosList.length}
        clearCompleted={handleClearCompleted}
      />
    ) : null;

  return (
    <div className="todo-app">
      <Header
        addTodo={onAddTodo}
      />
      <TodoList
        todosList={filterByStatus(todosList, status)}
        markCompleted={handleMarkCompleted}
        onRemoveTodo={handleRemoveTodo}
        getEditTodo={handleEditTodo}
        editTodo={editTodo}
        editId={editId}
      />
      {footer}
    </div>
  )
}

