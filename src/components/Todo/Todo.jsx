import React, { useState } from 'react'

export default function Todo(props) {
    const { todo, onRemoveTodo, index, editTodo, getEditTodo, editId, markCompleted } = props;

    const isEditing = editId === todo.id;
    const [text, setText] = useState(todo.text);

    const handleRemoveTodo = () => {
        if (!onRemoveTodo)
            return;
        onRemoveTodo(todo.id);
    }

    const handleBlur = () => {
        editTodo({
            ...todo,
            text
        }, index);
        getEditTodo("");
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && text) {
            handleBlur()
        }
    }
    
    return (
        <li className={`${isEditing ? 'editing' : ''}  ${todo.isCompleted ? 'completed' : ''}`}>
            {
                !isEditing ?
                <div className="todo">
                    <input
                        type="checkbox"
                        className="toggle"
                            checked={todo?.isCompleted}
                            onChange={() => markCompleted(todo.id)}
                    />
                    <label onDoubleClick={() => getEditTodo(todo.id)}>{ todo?.text }</label>
                    <button
                        className="delete"
                        onClick={handleRemoveTodo}
                    >
                    </button>
                </div> :
                    
                <input
                    className="edit"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                />
            } 
            
        </li>
        
    )
}