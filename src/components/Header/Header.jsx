import { useState } from 'react'
import "./header.scss"

export default function Header(props) {
    const { addTodo } = props;
    const [text, setText] = useState("");

    const onAddTodo = (e) => {
        if (e.key === 'Enter' && text) {
            addTodo({
                id: Math.floor(Math.random() * 50),
                text,
                isCompleted: false
            })
            setText("");
        }
    }

    return (
        <div className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onKeyPress={onAddTodo}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}
