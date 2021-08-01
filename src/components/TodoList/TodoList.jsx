import React from 'react'
import Todo from '../Todo/Todo'
import './todolist.scss'

export default function TodoList(props) {
    const { todosList } = props;

    return (
        <div className="main">
            <input
                type="checkbox"
                className="toggle-all"
            />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    todosList.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                {...props}
                            />
                        )
                    })
                }
            </ul>
        </div>
        
    )
}
